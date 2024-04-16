import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center p-20 mx-auto w-full text-lg text-center text-black bg-white max-w-[480px]">
      <div className="mt-8 text-4xl underline">BearWatch</div>
      <div className="justify-center items-center px-16 py-5 mt-28 border border-black border-solid">
        AI Call
      </div>
      <div className="justify-center px-10 py-5 mt-3.5 border border-black border-solid">
        Find Route Home
      </div>
      <div className="justify-center px-12 py-5 mt-3.5 border border-black border-solid">
        Report Incident
      </div>
      <div className="justify-center px-3 py-6 mt-3.5 border border-black border-solid">
        Find a Walk/Call Partner
      </div>
      <div className="items-center px-16 pt-3.5 pb-6 mt-24 whitespace-nowrap border border-black border-solid">
        Profile
      </div>
      <div className="justify-center items-center px-16 py-4 mt-2.5 whitespace-nowrap border border-black border-solid">
        Settings
      </div>
    </div>
  );
}



export default MyComponent