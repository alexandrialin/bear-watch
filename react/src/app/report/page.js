"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';



export default function Report(data) {
    const router = useRouter();
    var callBar;
    console.log(data.searchParams);
    if (data.searchParams["isInCall"] == "true") {
       callBar = <div style=
       {{width: "100%", height: "20px", backgroundColor: "#2AFC7E", textAlign: "center", justifyContent:"center", display:"flex", alignItems: "center"}}>
            <Link href="bot-call" style={{fontSize:"10px", color: "#FFF"}}>In Call</Link>
       </div>; 
    }


  return (
    <div className="flex flex-col items-center py-6 pr-12 pl-3.5 mx-auto w-full border-solid bg-sky-950 border-[3px] border-slate-500 max-w-[480px]">
    {callBar}
      <button className="overflow-hidden relative flex-col justify-center items-start self-start px-4 text-xl text-white whitespace-nowrap aspect-[4] w-[60px]" onClick={()=> router.back()}>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
          className="object-cover absolute inset-0 size-full"
        />
        Back
      </button>
      <div className="mt-2.5 text-2xl font-semibold text-center text-amber-400">
        Report Incident
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-5 w-full aspect-[1.32] max-w-[298px]">
        <img
          loading="lazy"
          srcSet="..."
          className="object-cover absolute inset-0 size-full"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="my-4 aspect-[1.1] w-[34px]"
        />
      </div>
      <div className="mt-4 text-base text-center text-white w-[298px]">
        32 Hearst Ave, Berkeley 94704
        {data.searchParams["Location"]}
        <br />
        {data.searchParams["Time"]}
      </div>
      <div className="self-start mt-12 ml-16 text-base font-semibold text-amber-400">
        Type of Incident
      </div>
      <div className="flex gap-5 mt-1.5 text-sm text-black">
        <div className="flex flex-col flex-1">
          <div className="justify-center px-2.5 py-7 bg-amber-400 rounded-xl">
            Suspicious Behavior
          </div>
          <div className="justify-center px-2.5 py-10 mt-2.5 whitespace-nowrap bg-amber-400 rounded-xl">
            Harassment
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="justify-center px-2.5 py-7 bg-amber-400 rounded-xl">
            Unsafe Environment
          </div>
          <div className="justify-center px-2.5 py-10 mt-2.5 whitespace-nowrap bg-amber-400 rounded-xl">
            Emergency Situation
          </div>
        </div>
      </div>
      <div className="self-start mt-7 ml-16 text-base font-semibold text-amber-400">
        Details
      </div>
      <input className="shrink-0 mt-5 rounded-xl bg-zinc-300 bg-opacity-40 h-[98px] w-[238px]" />
      <button className="justify-center items-start px-10 py-2.5 mt-6 max-w-full text-xl font-semibold text-black whitespace-nowrap bg-amber-400 rounded-xl w-[146px]" onClick={()=>submit()}>
        Submit
      </button>
    </div>
  );
}

function submit() {
    return (
        <div className="flex flex-col items-center py-6 pr-12 pl-3.5 mx-auto w-full border-solid bg-sky-950 border-[3px] border-slate-500 max-w-[480px]">
            <div>Your report was sent.</div>
            <div onClick={()=> router.back()}>Return</div>

</div>
    )
}

