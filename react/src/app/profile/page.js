'use client'
import * as React from "react";
import Link from 'next/link';

export default function MyComponent() {
  const [name, setName] = React.useState(localStorage.getItem('name') || '');
  const [height, setHeight] = React.useState(localStorage.getItem('height') || '');
  const [identity, setIdentity] = React.useState(localStorage.getItem('identity') || '');
  const [diet, setDiet] = React.useState(localStorage.getItem('diet') || '');
  const [language, setLanguage] = React.useState(localStorage.getItem('language') || '');
  const [health, setHealth] = React.useState(localStorage.getItem('health') || '');


  const saveSettings = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('height', height);
    localStorage.setItem('identity', identity);
    localStorage.setItem('diet', diet);
    localStorage.setItem('language', language);
    alert("Settings Saved!")


  };

  
  return (
    <div
      className="flex flex-col items-center px-6 pt-10 pb-6 mx-auto w-full bg-sky-950 max-w-[480px] mx-auto h-screen w-screen"
      style={{ backgroundColor: "#081F45" }}
    >
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
              Profile
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
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
          </div>
          <div className="justify-center pl-3 py-2.5 mt-3 whitespace-nowrap bg-zinc-300 bg-opacity-10 w-40">
            Height
            <input
              type="text"
              name="height"
              value={height}
              onChange={e => setHeight(e.target.value)}
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
          </div>
          <div className="justify-center px-2.5 py-2.5 mt-3 bg-zinc-300 bg-opacity-10 w-40">
            Identity
            <input
              type="text"
              name="identity"
              value={identity}
              onChange={e => setIdentity(e.target.value)}
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
              name="diet"
              value={diet}
              onChange={e => setDiet(e.target.value)}
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
        <div className="w-full bg-white border border-white border-solid min-h-[2px]" />
      </div>
      <div className="flex flex-col mt-8 w-full text-white">
        <div className="w-full text-xs">Primary Language</div>
        <input
              type="text"
              name="language"
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-[196px] px-2 text-white bg-transparent border-none focus:outline-none focus:border focus:border-black"
            />
        <div className="w-full bg-white border border-white border-solid min-h-[2px]" />
      </div>
      <div className="flex flex-col py-2 pl-2 mt-6 w-full text-white bg-white bg-opacity-0">
        <div className="text-xs">Other Health Issues</div>
        <input
              type="text"
              name="health-issue"
              value={health}
              onChange={e => setHealth(e.target.value)}
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
      {/* <div className="justify-center py-4 mt-4 w-full text-xs text-white bg-zinc-100 bg-opacity-10">
        Bob Smith
        <br />
        (123)-456-7890
        <br />
        23 Main St. Berkeley CA
        <br />
        Brother
      </div> */}
      <button onClick={saveSettings} className="justify-center self-center px-7 py-4 mt-11 text-2xl font-bold text-center text-black bg-amber-400 rounded-3xl">
            Save Settings
      </button>
    </div>
    

      </div>
    </div>
  );
}


