import * as React from "react";
import Link from 'next/link';

export default function MyComponent() {
  return (
    <div style={{ backgroundColor: '#081F45' }} className="flex flex-col justify-center mx-auto w-full max-w-[480px]">
      <div
      className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto w-full bg-sky-950 max-w-[480px] mx-auto h-screen w-screen"
      style={{ backgroundColor: "#081F45" }}
    >
        <div className="flex flex-row">
          <div className="flex flex-row mr-36">
            <div className="box-border relative shrink-0 my-auto mr-16 ml-10 h-auto text-left max-sm:mr-14 max-sm:text-xl">
              <p>
              <Link href="/setting-choice">
                <strong className="text-white">&lt; Back</strong>
                </Link>
              </p>
            </div>
            <div className="flex-auto mx-auto mt-px text-2xl font-semibold text-center text-amber-400">
              Privacy
            </div>
          </div>
        </div>
        {/* end of header */}
        <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Share Route
            </div>
            <div className="flex justify-center items-center">
            <label className="relative inline-block w-14 h-8">
              <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
              <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out cursor-pointer before:absolute before:bottom-1 before:left-1 before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform before:duration-200 before:ease-in-out peer-checked:bg-green-400 peer-checked:before:translate-x-6"></span>
            </label>

            </div>
          </div>
      </div>
      <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Share Health Info
            </div>
            <div className="flex justify-center items-center">
            <label className="relative inline-block w-14 h-8">
              <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
              <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out cursor-pointer before:absolute before:bottom-1 before:left-1 before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform before:duration-200 before:ease-in-out peer-checked:bg-green-400 peer-checked:before:translate-x-6"></span>
            </label>

            </div>
          </div>
      </div>
      <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Enable Camera Access
            </div>
            <div className="flex justify-center items-center">
            <label className="relative inline-block w-14 h-8">
              <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
              <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out cursor-pointer before:absolute before:bottom-1 before:left-1 before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform before:duration-200 before:ease-in-out peer-checked:bg-green-400 peer-checked:before:translate-x-6"></span>
            </label>

            </div>
          </div>
      </div>
      <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Enable Microphone Access
            </div>
            <div className="flex justify-center items-center">
            <label className="relative inline-block w-14 h-8">
              <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
              <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out cursor-pointer before:absolute before:bottom-1 before:left-1 before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform before:duration-200 before:ease-in-out peer-checked:bg-green-400 peer-checked:before:translate-x-6"></span>
            </label>

            </div>
          </div>
      </div>
      <div className="pt-80">
        </div>
        

      </div>
    </div>
  );
}


