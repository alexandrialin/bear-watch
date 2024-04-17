"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto h-screen w-screen"
      style={{ backgroundColor: "#081F45" }}
    >
      <div className="my-20">
        <div className="text-white text-center text-5xl">Bob</div>
        <div className="text-white text-center text-md">1:06</div>
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

        <div className="flex flex-col items-center">
          <button className="h-16 w-16 rounded-full border-4 border-amber-400 bg-auto text-black flex items-center justify-center">
            <span className="text-amber-400 text-3xl text-center ">+</span>
          </button>
          <div className="text-center mt-2 text-amber-400">Safe End Call</div>
        </div>

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
          <div className="flex-auto my-auto">Report Incident</div>
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
    </div>
  );
}
