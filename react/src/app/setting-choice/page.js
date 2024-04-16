import * as React from "react";
import Link from 'next/link';
export default function SettingChoice() {
  return (
    <div className="flex flex-col justify-center mx-auto w-full max-w-[480px]">
      <div className="flex flex-col justify-end items-center pt-12 pr-20 pb-20 pl-6 w-full bg-sky-950">
        <div className="flex gap-5 self-start whitespace-nowrap">
          <div className="overflow-hidden relative flex-col justify-center items-start px-4 my-auto text-xl text-white aspect-[4] w-[60px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61bff142275936bc28ef58f7f836c661e04a5b9aca3b2194b10baecd24eee519?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
              className="object-cover absolute inset-0 size-full"
            />
            Back
          </div>
          <div className="flex-auto text-2xl font-semibold text-center text-amber-400">
            Settings
          </div>
        </div>
        <div className="flex flex-col justify-center px-10 py-12 mt-40 max-w-full text-base font-semibold text-center bg-white rounded-xl border border-amber-400 border-solid text-sky-950 w-[200px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b61388398eea8ec1f51898d3d5a48b1623c6c5e4e5f6e3333fd6e2bb9bf945?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
            className="self-center aspect-[1.09] w-[59px]"
          />
          <div className="mt-3.5">Privacy Settings</div>
        </div>
        <div className="flex flex-col px-12 pt-7 pb-12 mt-9 mb-24 max-w-full text-base font-semibold text-center bg-amber-400 rounded-xl border border-black border-solid text-sky-950 w-[200px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7cb5117c1e8d9ce53d8a3741016ada2d422c04cd455da85cb886e3267eceb5d?apiKey=308dd41c1b654e0d93a9458741b2ee85&"
            className="self-center aspect-[0.98] w-[66px]"
          />
          <div className="mt-4">Bot Call Setup</div>
        </div>
      </div>
    </div>
  );
}

