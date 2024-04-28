"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

// generate an enum for status
const Status = Object.freeze({
  CONFIRMATION: "confirmation",
  IN_EMERGENCY: "in_emergency",
  FINISHED: "finished",
});
const mimeType = "video/webm";

// Video code inspired from https://blog.logrocket.com/how-to-create-video-audio-recorder-react/#mediarecorder-api
export default function Page() {
  const [status, setStatus] = useState(Status.CONFIRMATION);
  const [time, setTime] = useState(6);
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const liveVideoFeed = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [videoChunks, setVideoChunks] = useState([]);
  const [recordedVideo, setRecordedVideo] = useState(null);
  const router = useRouter();

  const startEmergency = () => {
    setStatus(Status.IN_EMERGENCY);
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  const getCameraPermission = async () => {
    setRecordedVideo(null);
    if ("MediaRecorder" in window) {
      try {
        const videoConstraints = {
          audio: false,
          video: true,
        };
        const audioConstraints = { audio: true };
        // create audio and video streams separately
        const audioStream = await navigator.mediaDevices.getUserMedia(
          audioConstraints
        );
        const videoStream = await navigator.mediaDevices.getUserMedia(
          videoConstraints
        );
        setPermission(true);
        //combine both audio and video streams
        const combinedStream = new MediaStream([
          ...videoStream.getVideoTracks(),
          ...audioStream.getAudioTracks(),
        ]);
        setStream(combinedStream);
        //set videostream to live feed player
        liveVideoFeed.current.srcObject = videoStream;
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    setRecordingStatus("recording");
    const media = new MediaRecorder(stream, { mimeType });
    mediaRecorder.current = media;
    mediaRecorder.current.start();
    let localVideoChunks = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localVideoChunks.push(event.data);
    };
    setVideoChunks(localVideoChunks);
  };

  const stopRecording = () => {
    setPermission(false);
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const videoBlob = new Blob(videoChunks, { type: mimeType });
      const videoUrl = URL.createObjectURL(videoBlob);
      setRecordedVideo(videoUrl);
      setVideoChunks([]);
    };
  };

  const sendMessage = async () => {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${process.env.NEXT_PUBLIC_TWILLIO_ACCOUNT}/Messages.json`;

    const authHeader =
      "Basic " +
      btoa(
        `${process.env.NEXT_PUBLIC_TWILLIO_ACCOUNT}:${process.env.NEXT_PUBLIC_TWILLIO_AUTH}`
      );
    const headers = {
      Authorization: authHeader,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const body = new URLSearchParams({
      To: "+18777804236",
      From: "+18447803609",
      Body: "Your contact is in an emergency",
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        throw new Error("Failed to send message: " + response.statusText);
      }

      const responseData = await response.json();
      console.log("Message sent successfully:", responseData);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (status != Status.IN_EMERGENCY) return;

    if (time == 0) {
      setStatus(Status.FINISHED);
      // sendMessage();
      startRecording();
      return;
    }

    const intervalId = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [time, status]);

  if (status == Status.CONFIRMATION) {
    return (
      <div
        className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto w-full"
        style={{ backgroundColor: "#081F45", height: "100vh" }}
      >
        <div className="text-white text-center text-3xl my-24">
          Contact Emergency Contacts?
        </div>
        <div
          className="flex items-center justify-center bg-amber-400 w-2/3 h-1/2 rounded-lg"
          onClick={() => startEmergency()}
        >
          <div className="font-semibold text-2xl"> Yes, Emergency!</div>
        </div>

        <div
          className="text-white text-center text-xl my-12"
          onClick={() => router.back()}
        >
          No, Cancel
        </div>
      </div>
    );
  } else if (status == Status.IN_EMERGENCY) {
    return (
      <div className="flex flex-col justify-around content-center h-screen w-screen bg-red-700">
        <div className="text-white text-center text-2xl my-24 mx-10">
          Contacting Emergency Contacts In
        </div>
        <div className="text-white text-center text-8xl my-24">{time}</div>
        <div
          className="text-white text-center text-2xl my-24"
          onClick={() => router.back()}
        >
          No, take me back
        </div>
      </div>
    );
  } else if (status == Status.FINISHED) {
    return (
      <div
        className="flex flex-col justify-around content-center h-screen w-screen bg-red-700"
        style={{ backgroundColor: "#081F45" }}
      >
        <div className="text-white text-center text-2xl my-24 mx-10">
          Emergency Contacts Alerted
        </div>

        <div class="left">
          <div id="startButton" class="button">
            Start Recording
          </div>
          <h2>Preview</h2>
          <video id="preview" width="160" height="120" autoplay muted></video>
        </div>
      </div>
    );
  }
}
