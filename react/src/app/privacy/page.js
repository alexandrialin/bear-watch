import * as React from "react";
import Link from 'next/link';

export default function MyComponent() {
  return (
    <div style={{ backgroundColor: '#081F45' }} className="flex flex-col justify-center mx-auto w-full max-w-[480px]">
      <div className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto w-full bg-sky-950 max-w-[480px]"
      style={{ backgroundColor: '#081F45' }}>
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
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d78a63125d9edb4778753bf328b084f3eed28da0681fe4c1e42ff5447feb7a7c?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
                className="aspect-[1.82] w-[53px]"
              />
            </div>
          </div>
      </div>
      <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Share Health Info
            </div>
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d78a63125d9edb4778753bf328b084f3eed28da0681fe4c1e42ff5447feb7a7c?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
                className="aspect-[1.82] w-[53px]"
              />
            </div>
          </div>
      </div>
      <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Enable Camera Access
            </div>
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d78a63125d9edb4778753bf328b084f3eed28da0681fe4c1e42ff5447feb7a7c?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
                className="aspect-[1.82] w-[53px]"
              />
            </div>
          </div>
      </div>
      <div className="pt-8">
          <div className="flex gap-5 justify-between px-5 py-3.5 rounded-xl bg-neutral-500 bg-opacity-30 w-[329px]">
            <div className="my-auto text-base text-center text-white">
              Enable Microphone Access
            </div>
            <div className="flex justify-center items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d78a63125d9edb4778753bf328b084f3eed28da0681fe4c1e42ff5447feb7a7c?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
                className="aspect-[1.82] w-[53px]"
              />
            </div>
          </div>
      </div>
      <div className="pt-80">
        </div>
        

      </div>
    </div>
  );
}


