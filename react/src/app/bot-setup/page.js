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
        <div className="flex flex-col max-w-[337px]">
      <div className="flex flex-col px-8 w-full">
        <div className="flex gap-5 mt-10 justify-between items-start w-full">
          <div className="mt-3.5 text-xl text-center text-white">Voice</div>
          <div className="flex gap-5 justify-between">
          <div className="flex items-center pt-5">
          <input
            type="radio"
            name="genderOption" 
            id="feminineOption" 
            className="text-white focus:ring-white h-6 w-6"
          />
          <label htmlFor="feminineOption" className="ml-2 text-xl text-center text-white">
            Masculine
          </label>
        </div>
          </div>
        </div>
        
        <div className="flex gap-5 items-center justify-between self-end mt-4">
        <div className="flex items-center">
          <input
            type="radio"
            name="genderOption" 
            id="feminineOption" 
            className="text-white focus:ring-white h-6 w-6"
          />
          <label htmlFor="feminineOption" className="ml-2 text-xl text-center text-white">
            Feminine
          </label>
        </div>
      </div>

      </div>
      <div className="flex gap-5 justify-between px-5 mt-11 w-full">
        <div className="my-auto text-xl text-center text-white">Relation</div>
        <div className="flex justify-end items-center">
          <select
            name="relation"
            className="px-4 py-2 text-xl bg-white w-60 rounded-md border border-black"
          >
            <option value="family">Family</option>
            <option value="friend">Friend</option>
          </select>
        </div>
      </div>

      <div className="flex gap-5 justify-between px-5 mt-12 text-xl w-30 text-center text-white">
        <div className="my-auto whitespace-nowrap">Safe Word</div>
        <input
          type="text"
          name="safeword"
          placeholder="Enter safe word"
          className="shrink-0 bg-white rounded-md border border-black border-solid h-[35px] w-[196px] px-2 text-black" // Added text-black for black text color
        />
      </div>


      <div className="flex gap-5 justify-between px-5 mt-11 w-full">
        <div className="my-auto text-xl text-center text-white">Ringtone</div>
        <div className="flex justify-end items-center">
          <select
            name="ringtone"
            className="px-4 py-2 text-xl w-60 bg-white rounded-md border border-black"
          >
            <option value="radar">Radar</option>
            <option value="seaside">By The Seaside</option>
          </select>
        </div>
      </div>

      <div className="flex gap-5 px-5 py-3.5 mt-10 w-full rounded-xl bg-neutral-500 bg-opacity-30">
        <div className="flex-auto my-auto text-xl text-center text-white">
          Record Video
        </div>
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c10e63a5414910e49b975223dbe6b2cc516faa2ec1105be49f34c7840e037c?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
            className="w-14 aspect-[1.92]"
          />
        </div>
      </div>
      <div className="flex gap-5 px-5 py-3.5 mt-8 w-full rounded-xl bg-neutral-500 bg-opacity-30">
        <div className="flex-auto my-auto text-xl text-center text-white">
          Record Audio
        </div>
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c10e63a5414910e49b975223dbe6b2cc516faa2ec1105be49f34c7840e037c?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
            className="w-14 aspect-[1.92]"
          />
        </div>
      </div>
      <div className="justify-center self-center px-7 py-4 mt-11 text-2l font-bold text-center text-black bg-amber-400 rounded-3xl">
        Quick Start Call
      </div>
    </div>
        

      </div>
    </div>
  );
}


