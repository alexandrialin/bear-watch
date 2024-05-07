"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
export default function Page() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [conversation, setConversation] = useState(''); 
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';
  const router = useRouter();

  useEffect(() => {
    setListening(true);
    
    
  }, []);

  useEffect(() => {
    
    if(localStorage.getItem("ringtone") == "seaside")
    {
      console.log("playing seaside");
      const audio = new Audio('/seaside.mp3');
      audio.play();
    }
    else if(localStorage.getItem("ringtone") == "radar")
    {
      console.log("playing radar");
      const audio = new Audio('/radar.mp3');
      audio.play();
    }
    
  }, []); 

  useEffect(() => {
    const intervalId = startTimer();
    return () => clearInterval(intervalId);
}, []);

  useEffect(() => {
    recognition.onresult = event => {
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          const finalTranscript = event.results[i][0].transcript;
          console.log("User said (final):", finalTranscript);
          if(finalTranscript.includes(localStorage.getItem('safeWord')))
          {
            console.log("emergency");
            router.push('emergency');
          }
          updateConversation(finalTranscript);
          setTranscript(finalTranscript);
          setListening(false);
          handleAIResponse(finalTranscript);
        }
      }
    };

    recognition.onstart = () => console.log("Recognition started.");
    recognition.onend = () => {
      console.log("Recognition stopped.");
      if (!isSpeaking) {
        setListening(true); 
      }
    };

    if (listening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.abort();
  }, [listening, isSpeaking]);

  const handleAIResponse = async (text) => {
    console.log("Sending to AI:", text);
    try {
      const response = await fetch('https://noggin.rea.gent/elegant-buzzard-8215', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer rg_v1_dmjggtj8ekjk979xxxf8oeb4tr5jzxfomp4z_ngk',
        },
        body: JSON.stringify({
          "gender": localStorage.getItem('gender'),
          "relation": localStorage.getItem('relation'),
          "chat": text,
          "name": localStorage.getItem('name'),
          "botName": localStorage.getItem('botName'),
          "history": conversation
        }),
      });
      const responseData = await response.text();
      console.log(localStorage.getItem('botName'));
      console.log(localStorage.getItem('gender'));
      console.log(localStorage.getItem('relation'));
      console.log(localStorage.getItem('ringtone'));
      console.log("Reagent responded:", responseData);
      updateConversation(responseData); 
      setIsSpeaking(true); 
      speak(responseData);
    } catch (error) {
      console.error('Error calling Reagent API:', error);
    }
  };

  const updateConversation = (message) => {
    setConversation(prev => `${prev} \n${message}`);
  };

  const speak = (text) => {
    console.log("Speaking out:", text);
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    if(localStorage.getItem('gender') == "male"){

      const voice = voices.find(voice => voice.name === "Aaron") || voices.find(voice => voice.lang.startsWith('en-'));
      if (voice) {
          utterance.voice = voice;
      } else {
          console.log("Preferred voice not found. Using default voice.");
      }

    }
    
    utterance.onend = () => {
        console.log("Speech synthesis ended.");
        setIsSpeaking(false);
        if (!listening) {
            setListening(true); 
        }
    };

    window.speechSynthesis.speak(utterance);
};

const startTimer = () => {
  return setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
  }, 1000);
};

const formatTime = () => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

  return (
    <div className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto h-screen w-screen" style={{ backgroundColor: "#081F45" }}>
      <div className="my-20">
        <div className="text-white text-center text-5xl">{localStorage.getItem('botName')}</div>
        <div className="text-white text-center text-md">{formatTime()}</div>
      </div>
      <div className="grid grid-cols-3 gap-10 p-4">
        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">Directions</div>
        </div>
        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">Keypad</div>
        </div>
        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">Speaker</div>
        </div>
        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">Add Call</div>
        </div>
        <Link href="/">
        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">Safe End Call</div>
        </div>
        </Link>
        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">
            Idk something else?
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex gap-3 px-6 py-3 mt-3.5 max-w-full text-base font-bold text-center text-amber-400 rounded-xl border-2 border-amber-400 border-solid w-[225px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c70fe4d1b4555d8a716644d2674efa9a5f2abb4b4042d9ad8942825b479807?"
            className="shrink-0 aspect-[0.94] w-[31px]"
          />
          <Link href="report" className="flex-auto my-auto">Report Incident</Link>
        </div>
        <Link href="emergency">
          <div className="flex gap-3 px-6 py-3 mt-3.5 max-w-full text-base font-bold text-center text-amber-400 rounded-xl border-2 border-amber-400 border-solid w-[225px] bg-red-700">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c70fe4d1b4555d8a716644d2674efa9a5f2abb4b4042d9ad8942825b479807?"
              className="shrink-0 aspect-[0.94] w-[31px]"
            />
            <div className="flex-auto my-auto">Emergency</div>
          </div>
        </Link>
      </div>
      <p className="text-white mt-4">{transcript}</p>
    </div>
  );
}
