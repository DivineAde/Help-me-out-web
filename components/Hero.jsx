import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center md:flex-row mx-auto max-w-6xl px-4 gap-6 mt-12">
      <div className="w-full md:w-1/2">
        <h1 className=" font-extrabold text-6xl">
          Show them <br /> Don't just tell
        </h1>
        <p className="mt-2">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link href={'/signin'}>
        <button className=" bg-[var(--button-background)] p-4 text-white rounded-md mt-3">
          Install Help me Out
        </button>
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex gap-5 relative">
        <div className="flex flex-col gap-4 z-20">
          <img className="" src="/Frame 1000002595.png" alt="" />
          <img className="" src="/Frame 1000002596.png" alt="" />
        </div>
        <div className=" z-10">
          <img className="" src="/Frame 1000002597.png" alt="" />
        </div>

        {/*  <Image width={300} height={300} className="absolute top-[-10%] left[-5%] lg:left-[55%] z-0" src="/grid.136a9256d16888900db0.svg.png" alt=""/>
          <Image width={300} height={300} className="absolute bottom-[-10%] right[-55%] z-0" src="/grid.136a9256d16888900db0.svg.png" alt=""/>
           */}
      </div>
    </div>
  );
}
