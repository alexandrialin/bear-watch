import * as React from "react";
import Link from 'next/link';

export default function MyComponent() {
  return (
    <div className="flex flex-col justify-center mx-auto w-full max-w-[480px]">
      <div className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto w-full bg-sky-950 max-w-[480px]"
      style={{ backgroundColor: '#081F45' }}>
        <div className="flex flex-row">
          <div className="flex flex-row mr-36">
            <div className="box-border relative shrink-0 my-auto mr-16 ml-10 h-auto text-left max-sm:mr-14 max-sm:text-xl">
              <p>
              <Link href="/">
                <strong className="text-white">&lt; Back</strong>
                </Link>
              </p>
            </div>
            <div className="flex-auto mx-auto mt-px text-2xl font-semibold text-center text-amber-400">
              Settings
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="flex gap-5 self-start mr-16 whitespace-nowrap" />
        </div>
        <Link href="/privacy">
        <div className="flex flex-col justify-center px-10 py-12 mt-40 max-w-full text-base font-semibold text-center bg-white rounded-xl border border-amber-400 border-solid text-sky-950 w-[200px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b61388398eea8ec1f51898d3d5a48b1623c6c5e4e5f6e3333fd6e2bb9bf945?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
            className="self-center aspect-[1.09] w-[59px]"
          />
          <div className="mt-3.5">Privacy Settings</div>
        </div>
        </Link>
        <Link href="/bot-setup">
        <div className="flex flex-col px-12 pt-7 pb-12 mt-9 mb-24 max-w-full text-base font-semibold text-center bg-amber-400 rounded-xl border border-black border-solid text-sky-950 w-[200px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7cb5117c1e8d9ce53d8a3741016ada2d422c04cd455da85cb886e3267eceb5d?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
            className="self-center aspect-[0.98] w-[66px]"
          />
          <div className="mt-4">Bot Call Setup</div>
        </div>
        </Link>
      </div>
    </div>
  );
}


