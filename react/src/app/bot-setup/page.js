'use client'
import * as React from "react";
import Link from 'next/link';

export default function MyComponent() {

  const [botName, setBotName] = React.useState(localStorage.getItem('botName') || '');
  const [gender, setGender] = React.useState(localStorage.getItem('gender') || '');
  const [relation, setRelation] = React.useState(localStorage.getItem('relation') || '');
  const [safeWord, setSafeWord] = React.useState(localStorage.getItem('safeWord') || '');
  const [ringtone, setRingtone] = React.useState(localStorage.getItem('ringtone') || '');

  const saveSettings = () => {
    localStorage.setItem('botName', botName);
    localStorage.setItem('gender', gender);
    localStorage.setItem('relation', relation);
    localStorage.setItem('safeWord', safeWord);
    localStorage.setItem('ringtone', ringtone);
    alert("Settings Saved!")

  };
  

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
              Setup
            </div>
          </div>
        </div>
        {/* end of header */}
        <div className="flex flex-col max-w-[337px]">
        <div className="flex gap-5 justify-between px-5 mt-12 text-xl w-30 text-center text-white">
        <div className="my-auto whitespace-nowrap">Name</div>
        <input
          type="text"
          name="botName"
          value={botName}
          placeholder="Enter name"
          className="shrink-0 bg-white rounded-md border border-black border-solid h-[35px] w-[196px] px-2 text-black" 
          onChange={e => setBotName(e.target.value)}
        />
      </div>
      <div className="flex flex-col px-8 w-full">
        <div className="flex gap-5 mt-10 justify-between items-start w-full">
          <div className="mt-3.5 text-xl text-center text-white">Voice</div>
          <div className="flex gap-5 justify-between">
          <div className="flex items-center pt-5">
          <input
            type="radio"
            name="genderOption" 
            id="masculineOption" 
            checked={gender === 'male'}
            className="text-white focus:ring-white h-6 w-6"
            onChange={() => setGender('male')}
          />
          <label htmlFor="masculineOption" className="ml-2 text-xl text-center text-white">
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
            checked={gender === 'female'}
            className="text-white focus:ring-white h-6 w-6"
            onChange={() => setGender('female')}
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
            value={relation}
            className="px-4 py-2 text-xl bg-white w-60 rounded-md border border-black"
            onChange={e => setRelation(e.target.value)}
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
          value={safeWord}
          placeholder="Enter safe word"
          className="shrink-0 bg-white rounded-md border border-black border-solid h-[35px] w-[196px] px-2 text-black" 
          onChange={e => setSafeWord(e.target.value)}
        />
      </div>


      <div className="flex gap-5 justify-between px-5 mt-11 w-full">
        <div className="my-auto text-xl text-center text-white">Ringtone</div>
        <div className="flex justify-end items-center">
          <select
            name="ringtone"
            value={ringtone}
            className="px-4 py-2 text-xl w-60 bg-white rounded-md border border-black"
            onChange={e => setRingtone(e.target.value)}
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
        <label className="relative inline-block w-14 h-8">
          <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
          <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out cursor-pointer before:absolute before:bottom-1 before:left-1 before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform before:duration-200 before:ease-in-out peer-checked:bg-green-400 peer-checked:before:translate-x-6"></span>
        </label>

        </div>
      </div>
      <div className="flex gap-5 px-5 py-3.5 mt-8 w-full rounded-xl bg-neutral-500 bg-opacity-30">
        <div className="flex-auto my-auto text-xl text-center text-white">
          Record Audio
        </div>
        <div className="flex justify-center items-center">
        <label className="relative inline-block w-14 h-8">
          <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
          <span className="absolute inset-0 bg-gray-300 rounded-full transition-colors duration-200 ease-in-out cursor-pointer before:absolute before:bottom-1 before:left-1 before:bg-white before:rounded-full before:h-6 before:w-6 before:transition-transform before:duration-200 before:ease-in-out peer-checked:bg-green-400 peer-checked:before:translate-x-6"></span>
        </label>


        </div>
      </div>
      <button onClick={saveSettings} className="justify-center self-center px-7 py-4 mt-11 text-2xl font-bold text-center text-black bg-amber-400 rounded-3xl">
            Save Settings
      </button>
    </div>
        

      </div>
    </div>
  );
}


