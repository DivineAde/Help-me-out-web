import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-12 mx-auto max-w-6xl">
      {/* header */}
      <div className="flex items-center px-4 justify-between py-2">
        <Link href={"/"}>
          <div className="flex items-center gap-2 ">
            <img src="/Layer 2.png" alt="" />
            <h3 className="text-color font-bold">Help me out</h3>
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M20.0007 36.6834C29.2054 36.6834 36.6673 29.2215 36.6673 20.0168C36.6673 10.812 29.2054 3.3501 20.0007 3.3501C10.7959 3.3501 3.33398 10.812 3.33398 20.0168C3.33398 29.2215 10.7959 36.6834 20.0007 36.6834Z"
              fill="#515151"
            />
            <path
              d="M20 11.5667C16.55 11.5667 13.75 14.3666 13.75 17.8166C13.75 21.2 16.4 23.95 19.9167 24.05C19.9667 24.05 20.0333 24.05 20.0667 24.05C20.1 24.05 20.15 24.05 20.1833 24.05C20.2 24.05 20.2167 24.05 20.2167 24.05C23.5833 23.9333 26.2333 21.2 26.25 17.8166C26.25 14.3666 23.45 11.5667 20 11.5667Z"
              fill="#515151"
            />
            <path
              d="M31.2992 32.2666C28.3326 34.9999 24.3659 36.6832 19.9992 36.6832C15.6326 36.6832 11.6659 34.9999 8.69922 32.2666C9.09922 30.7499 10.1826 29.3666 11.7659 28.2999C16.3159 25.2666 23.7159 25.2666 28.2326 28.2999C29.8326 29.3666 30.8992 30.7499 31.2992 32.2666Z"
              fill="#515151"
            />
          </svg>
          <h1>Hi mark</h1>
          <RiArrowDownSLine className="w-6 h-6" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between  px-4  mt-12 pb-12 border-b gap-2">
        <div className="">
          <h1 className=" text-3xl font-bold">Hello, John Mark</h1>
          <p className=" text-lg">Here are your recorded videos</p>
        </div>
        <div className=" flex items-center justify-center p-4 text-white rounded-lg home_input">
          <input
            placeholder="Search for video"
            className=" bg-transparent outline-none min-w-[300px] md:min-w-[400px]"
          />
        </div>
      </div>

      {/* Recent files */}
      <div className="px-4 max-h-[80vh] overflow-scroll">
        <h1 className="mx-auto max-w-6xl my-6">Recent files</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href={'/home/id'}>
          <img src="/WEB CARD.png" />
          </Link>

          <Link href={'/home/id'}>
          <img src="/WEB CARD (1).png" />
          </Link>
        </div>

        <h1 className="mt-12 mb-6">Files from last week</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href={'/home/id'}>
          <img src="/WEB CARD.png" />
          </Link>

          <Link href={'/home/id'}>
          <img src="/WEB CARD (1).png" />
          </Link>
        </div>
      </div>
    </div>
  );
}
