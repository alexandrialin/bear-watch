"use client";
"use strict";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import Link from 'next/link';



export default function Report(data) {
    const router = useRouter();
    var callBar;
    const [fromLocation, setfromLocation] = useState([37.87, -122.267]);
    const [address, setAddress] = useState("");
    const [time, setTime] = useState();

    if (data.searchParams["isInCall"] == "true") {
       callBar = <div style=
       {{width: "100%", height: "20px", backgroundColor: "#2AFC7E", textAlign: "center", justifyContent:"center", display:"flex", alignItems: "center"}}>
            <Link href="bot-call" style={{fontSize:"10px", color: "#FFF"}}>In Call</Link>
       </div>; 
    }

  //get location
  useEffect(() => {
  if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => { 
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setAddress(geocodeLatLng(lat, long));
      setfromLocation([lat, long]);
      setTime(new Date().toLocaleTimeString());
      const {Map} = google.maps;
      const mapOptions = {"center":{"lat":lat,"lng":long},"fullscreenControl":false,"mapTypeControl":false,"streetViewControl":false,"zoom":17,"zoomControl":false,"maxZoom":17,"mapId":"2"};
      const map = new Map(document.getElementById('gmp-map'), mapOptions);
      const marker = new google.maps.Marker({
        position: {lat: lat, lng: long},
        map: map,
      });
      marker.setMap(map);
  });
  }
}, []);

    async function geocodeLatLng(lat, long) {
      const geocoder = new google.maps.Geocoder();
      
      const latlng = {
        lat: parseFloat(lat),
        lng: parseFloat(long),
      };

      let add;
      await geocoder
        .geocode({ location: latlng })
        .then((response) => {
          if (response.results[0]) {
            add = response.results[0].formatted_address;
          } else {
            window.alert("No results found");
          }
        })
        .catch((e) => window.alert("Geocoder failed due to: " + e));
      return add;
    }
  
async function submit() {
  const detail = document.getElementById("details").value;
  var checks = document.querySelectorAll(".check");
  var type = [];
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      type.push(checks[i].id);
    }
  }
  const body = {position: {lat: fromLocation[0], lng: fromLocation[1]}, details: detail, type: type};
  await fetch("/api/getReports", {method:"PUT", body:JSON.stringify(body)}).then(alert("Your report was submitted.")
); 
}

  return (
    <div className="flex flex-col items-center py-6 pr-12 pl-3.5 mx-auto w-full border-solid bg-sky-950 border-[3px] border-slate-500 max-w-[480px]">
    {callBar}
      <button className="overflow-hidden relative flex-col justify-center items-start self-start px-4 text-xl text-white whitespace-nowrap aspect-[4] w-[60px]" onClick={()=> router.back()}>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
          className="object-cover absolute inset-0 size-full"
        />
        Back
      </button>
      <div className="mt-2.5 text-2xl font-semibold text-center text-amber-400">
        Report Incident
      </div>
      <div className="flex relative flex-col justify-center items-center w-full aspect-[1.0]">
        <div
          id="gmp-map"
          className="object-cover absolute inset-0 size-full"
        />
      </div>
      <br />
      <div style={{color: "white"}}>{address}</div>
      <div style={{color: "white"}}>{time}</div>
      <div className="mt-4 text-base text-center text-white w-[298px]">
        <br />
      </div>
      <div className="self-start mt-12 ml-16 text-base font-semibold text-amber-400">
        Type of Incident
      </div>
      <div className="flex gap-5 mt-1.5 text-sm text-black">
        <div className="flex flex-col flex-1">
          <input type="checkbox" className="check" id="Suspicious Behavior" value="value" style={{"display": "none"}}/>
            <label htmlFor="Suspicious Behavior">Suspicious Behavior</label>
          <input type="checkbox" className='check' id="Harrassment" value="value" style={{"display": "none"}}/>
            <label htmlFor="Harrassment">Harassment</label>
        </div>
        <div className="flex flex-col flex-1">
          <input type="checkbox" className="check" id="Unsafe Environment" value="value" style={{"display": "none"}}/>
            <label htmlFor="Unsafe Environment">Unsafe Environment</label>
          <input type="checkbox" className="check" id="Emergency Situation" value="value" style={{"display": "none"}}/>
            <label htmlFor="Emergency Situation">Emergency Situation</label>
        </div>
      </div>
      <div className="self-start mt-7 ml-16 text-base font-semibold text-amber-400">
        Details
      </div>
      <input id="details" className="shrink-0 mt-5 rounded-xl bg-zinc-300 bg-opacity-40 h-[98px] w-[238px]" />
      <button className="justify-center items-start px-10 py-2.5 mt-6 max-w-full text-xl font-semibold text-black whitespace-nowrap bg-amber-400 rounded-xl w-[146px]" onClick={()=>submit()}>
        Submit
      </button>
    </div>
  );
}

