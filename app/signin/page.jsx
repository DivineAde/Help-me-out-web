import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="pt-12">
      <Link href={'/'}>
      <div className="flex items-center gap-2 px-12">
        <img src="/Layer 2.png" alt="" />
        <h3 className="text-color font-bold">Help me out</h3>
      </div>
      </Link>

      <div className="flex flex-col items-center  mt-2 mx-auto max-w-xl px-4">
        <h1 className="font-extrabold text-3xl">Log in or Sign up</h1>
        <p className=" max-w-xs text-sm text-center mt-2">
          Join millions of others in sharing successful moves on HelpMeOut.
        </p>

        <div className="flex flex-col items-center justify-center w-full">
          <button className="flex items-center justify-center gap-4 border border-black w-full text-center py-2 rounded-xl my-4 cursor-pointer">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
                fill="#4285F4"
              />
              <path
                d="M11.9999 23.0001C14.9699 23.0001 17.4599 22.0151 19.2799 20.3351L15.7249 17.5751C14.7399 18.2351 13.4799 18.6251 11.9999 18.6251C9.13492 18.6251 6.70992 16.6901 5.84492 14.0901H2.16992V16.9401C3.97992 20.5351 7.69992 23.0001 11.9999 23.0001Z"
                fill="#34A853"
              />
              <path
                d="M5.845 14.0886C5.625 13.4286 5.5 12.7236 5.5 11.9986C5.5 11.2736 5.625 10.5686 5.845 9.90859V7.05859H2.17C1.4 8.59145 0.999321 10.2832 1 11.9986C1 13.7736 1.425 15.4536 2.17 16.9386L5.845 14.0886Z"
                fill="#FBBC05"
              />
              <path
                d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z"
                fill="#EA4335"
              />
            </svg>
            Continue with google
          </button>

          <button className="flex  justify-center gap-4 border border-black w-full text-center p-2 rounded-xl mt-4 cursor-pointer">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_205_4761)">
                <path
                  d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z"
                  fill="#1877F2"
                />
                <path
                  d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_205_4761">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            Continue with Facebook
          </button>


        </div>


        <div className="my-6 w-full">
        <hr className="m-[4px] h-[1.5px] text-black bg-gray-200"  />
        <span className="block w-[40px] m-auto bg-white text-sm mt-[-16px] text-center">or</span>
        </div>
        <form className="flex flex-col w-full">
          <label className="pb-2">Email</label>
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-2 rounded-lg border border-black outline-none mb-4"
          />

          <label className="pb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="p-2 rounded-lg border border-black outline-none mb-6"
          />

          <Link href={"/home"}>
            <button
              type="button"
              className="blue text-white font-bold text-lg py-3 rounded-lg w-full"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
