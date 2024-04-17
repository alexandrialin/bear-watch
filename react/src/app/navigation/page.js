import * as React from "react";
import browserEnv from 'browser-env';
import Link from 'next/link';


export default function Navigation(data) {
    var callBar = null;
    console.log(data.searchParams["isInCall"]);
    if (data.searchParams["isInCall"] = true) {
        console.log("true");
       callBar = <div style={{width: "100%", height: "20px", backgroundColor: "#2AFC7E", alignSelf:"center", alignContent:"center"}}>
            <Link href="bot-call" style={{fontSize:"10px"}}>In Call</Link>
       </div>; 
    }

    //save for backend bruh
    // var map = null;
    // browserEnv(['navigator']);
    // console.log(navigator);
    // if ("geolocation" in nagivator) {
    // const watchID = navigator.geolocation.watchPosition((position) => { 
    //      //leaflet map api
    //     let lat = position.coords.latitude;
    //     let long = position.coords.longitude;
    //     map = L.map('map').setView([lat,long], 13);
    // });
    // } 


  return (
    <div className="flex flex-col mx-auto w-full text-xl bg-white border-solid border-[3px] border-slate-500 max-w-[480px]">
      <div className="flex overflow-hidden relative flex-col items-start pt-6 pr-9 pb-20 pl-3 w-full text-2xl aspect-[0.63] text-zinc-500">
        {callBar}
        <div className="overflow-hidden relative flex-col justify-center items-start px-4 text-xl text-white whitespace-nowrap aspect-[4] w-[60px]">
        <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
              className="object-cover absolute inset-0 size-full"
            />
          Back
        </div>
        <input className="relative justify-center px-3.5 py-3.5 mt-6 ml-5 text-center rounded-lg bg-neutral-200" style={{width: "100%"}} placeholder="From: Current Location">
        </input>
        <input className="relative justify-center p-3.5 mt-5 ml-5 text-center rounded-lg bg-neutral-200" style={{width: "100%"}} placeholder="To: Home">
        </input>
        <div id="map" className="self-center mt-20 mb-24 w-full border-4 border-cyan-300 border-dashed aspect-[1.85] max-w-[282px] stroke-[4px] stroke-cyan-300"
></div>
      </div>
      <div className="flex gap-5 justify-between px-4 py-3 shadow-sm bg-sky-950">
        <div className="text-white">
          Most Direct Route
          <br />
          0.7 Mi
          <ul>
            <li>
              <span className="text-sm">Warning: Recent Crime Reported</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center self-start text-center text-black">
          <button className="justify-center px-5 py-3 bg-green-400 rounded-md">
            Go
            <br />
            15 Mins
          </button>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-4 pt-5 pb-1.5 w-full shadow-sm bg-sky-950">
        <div className="text-white">
          Safest Route
          <br />
          Safety Score: 4.5
          <br />
          0.75 Mi
          <ul>
            <li>
              <span className="text-sm">Well Lit</span>
            </li>
            <li>
              <span className="text-sm">High Traffic</span>
            </li>
            <li>
              <span className="text-sm">Low Crime Rate</span>
            </li>
          </ul>
        </div>
        <button className="flex flex-col justify-center my-auto text-center text-black">
          <div className="justify-center px-5 py-3 bg-green-400 rounded-md">
            Go
            <br />
            16 Mins
          </div>
        </button>
      </div>
    </div>
  );
}

