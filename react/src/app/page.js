"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Page() {
  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_GOOGLE_MAPS}&libraries=places,marker&solution_channel=GMP_QB_addressselection_v2_cAB`;

  return (
    <>
    <head><script src={src} aysnc defer></script></head>
    <body>
    <div
      className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto w-full bg-sky-950 max-w-[480px] mx-auto h-screen w-screen"
      style={{ backgroundColor: "#081F45" }}
    >
      <img
        loading="lazy"
        src="https://i.postimg.cc/8kM7NtnF/logo.png"
        style={{
          width: "300px",
          height: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
      <div className="flex gap-5 items-start px-8 pt-3 pb-5 mt-68 max-w-full text-base font-semibold text-center bg-amber-400 rounded-xl text-sky-950 w-[225px] ">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4854920f43cabd037b09cfdb7e7b35d945ca5881f81c0356dcd0603c987da073?"
          className="shrink-0 w-6 aspect-square"
        />
        <Link href="bot-call">
          <div className="flex-auto mt-1.5">Bot Call</div>
        </Link>
      </div>
      <div className="flex gap-5 px-8 py-4 mt-3.5 max-w-full text-base font-semibold text-center bg-amber-400 rounded-xl text-sky-950 w-[225px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6192c559cc64b75c5a64f6fcea971c4274dd0d4c2585745b01b2e8888a09f3b9?"
          className="shrink-0 w-6 aspect-square"
        />
        <Link href={{pathname: "/navigation", query: {"isInCall": false}}}>
        <div className="flex-auto my-auto">Find Route</div>
        </Link>
      </div>
      <div className="flex gap-5 px-7 py-4 mt-3.5 max-w-full text-base font-semibold text-center bg-amber-400 rounded-xl text-sky-950 w-[225px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bb29b2210b72bb60054df6177f92b575a75b6cfd346dfffb9dafd1ae26018df?"
          className="shrink-0 w-6 aspect-square"
        />
        <Link href="find-buddy">
          <div className="flex-auto my-auto">Find Buddy</div>
        </Link>
      </div>
      <div className="flex gap-3 px-6 py-3 mt-3.5 max-w-full text-base font-bold text-center text-amber-400 rounded-xl border-2 border-amber-400 border-solid w-[225px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/25c70fe4d1b4555d8a716644d2674efa9a5f2abb4b4042d9ad8942825b479807?"
          className="shrink-0 aspect-[0.94] w-[31px]"
        />
        <Link href={{pathname: "/report", query: {"isInCall": false}}}>
          <div className="flex-auto my-auto">Report Incident</div>
        </Link>
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-32">
        <Link href="setting-choice">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2292f9355b700c51215fb38c2c954c4651fccba3e6ca081eea8c72a0eb4b3c32?"
            className="shrink-0 aspect-[0.95] w-[60px]"
          />
        </Link>
        <Link href="profile">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a774e0177463daa7b0936e36ccdd9291374814fdb316bedf400a74ecd0b8b6f6?"
          className="shrink-0 my-auto aspect-[1.02] w-[53px]"
        />
        </Link>
      </div>
    </div></body>
    </>
  );
}
