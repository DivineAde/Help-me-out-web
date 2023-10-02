import React from "react";

export default function How() {
  return (
    <section className="mt-32">
      <h3 className="text-center font-bold mb-12 text-2xl">How it works</h3>
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        <div className="">
          <div className="flex flex-col items-center">
            <div className="bg-[var(--button-background)] text-white px-[26px] py-[14px] w-[68px] h-[67px] rounded-[60px] flex items-center justify-center">
              <label className="font-bold">1</label>
            </div>
            <h3 className="font-bold text-2xl mt-2">Record Screen</h3>
            <p className="text-center">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <div className="w-full">
            <img src="/rec-1.cb7888a47e24214aeb105805426a8300.svg.png" className="w-full" alt="" />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <div className="bg-[var(--button-background)] text-white px-[26px] py-[14px] w-[68px] h-[67px] rounded-[60px] flex items-center justify-center">
              <label className="font-bold">2</label>
            </div>
            <h3 className="font-bold text-2xl mt-2">Share Your Recording</h3>
            <p className="text-center">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <div className="w-full">
            <img src="/rec-1.cb7888a47e24214aeb105805426a8300.svg.png" className="w-full" alt="" />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <div className="bg-[var(--button-background)] text-white px-[26px] py-[14px] w-[68px] h-[67px] rounded-[60px] flex items-center justify-center">
              <label className="font-bold">3</label>
            </div>
            <h3 className="font-bold text-2xl mt-2">Learn Effortlessly</h3>
            <p className="text-center">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <div className="w-full">
            <img src="/rec-1.cb7888a47e24214aeb105805426a8300.svg.png" className="w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
