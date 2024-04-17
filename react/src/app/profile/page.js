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
              <Link href="/">
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
        <div className="flex flex-col pt-10 px-5 max-w-[339px]">
      <div className="flex gap-5 justify-between">
        <div className="justify-center items-center pt-10 text-base text-center text-black rounded-full bg-zinc-300 h-[123px] w-[123px]">
          Click to edit
        </div>
        <div className="flex flex-col self-start text-xs text-white">
          <div className="justify-center pl-3 py-3 whitespace-nowrap bg-zinc-300 bg-opacity-10 w-40">
            Name
            <input
              type="text"
              name="name"
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
          </div>
          <div className="justify-center pl-3 py-2.5 mt-3 whitespace-nowrap bg-zinc-300 bg-opacity-10 w-40">
            Height
            <input
              type="text"
              name="height"
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
          </div>
          <div className="justify-center px-2.5 py-2.5 mt-3 bg-zinc-300 bg-opacity-10 w-40">
            Identity
            <input
              type="text"
              name="identity"
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 w-full text-xl font-semibold text-amber-400">
        Health Information
      </div>
      <div className="flex flex-col mt-7 w-full text-white">
        <div className="w-full text-xs">Allergies and Dietary Restrictions</div>
        <input
              type="text"
              name="allergy"
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
        <div className="w-full bg-white border border-white border-solid min-h-[2px]" />
      </div>
      <div className="flex flex-col mt-8 w-full text-white">
        <div className="w-full text-xs">Primary Language</div>
        <input
              type="text"
              name="language"
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
        <div className="w-full bg-white border border-white border-solid min-h-[2px]" />
      </div>
      <div className="flex flex-col py-2 pl-2 mt-6 w-full text-white bg-white bg-opacity-0">
        <div className="text-xs">Other Health Issues</div>
        <input
              type="text"
              name="health-issue"
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
        <div className="shrink-0 h-0.5 bg-white border border-white border-solid" />
      </div>
      <div className="mt-9 w-full text-xl font-semibold text-amber-400">
        Emergency Contact
      </div>
      <div className="flex gap-5 justify-between items-start px-2.5 pt-1.5 pb-5 mt-6 w-full text-xs text-white bg-zinc-100 bg-opacity-10">
        <div>
          Name
          <br />
          Phone Number
          <br />
          Address
          <br />
          Relation
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f8af0c00e2191dfe971b2e646878a6a1f500632257268b713dd7af6aa595a007?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
          className="shrink-0 aspect-[1.19] fill-amber-400 w-[19px]"
        />
      </div>
      <div className="justify-center py-4 mt-4 w-full text-xs text-white bg-zinc-100 bg-opacity-10">
        Bob Smith
        <br />
        (123)-456-7890
        <br />
        23 Main St. Berkeley CA
        <br />
        Brother
      </div>
    </div>
        

      </div>
    </div>
  );
}


