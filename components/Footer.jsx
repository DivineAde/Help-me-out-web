import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between bg-[var(--button-background)] mt-48 py-[98px] px-12 md:px-[130px] text-white gap-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="/Layer 2 (1).png" alt="logo" />
        <h3>Help me out</h3>
      </div>

      <ul className="flex flex-col items-center">
        <li className="font-bold cursor-pointer">Menu</li>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Converter</li>
        <li className="cursor-pointer">How it works</li>
      </ul>

      <ul className="flex flex-col items-center">
        <li className="font-bold cursor-pointer">About us</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact us</li>
        <li className="cursor-pointer">Privacy policy</li>
      </ul>

      <ul className="flex flex-col items-center">
        <li className="font-bold cursor-pointer">Screen Recorder</li>
        <li className="cursor-pointer">Browser window</li>
        <li className="cursor-pointer">Desktop</li>
        <li className="cursor-pointer" >Application</li>
      </ul>
    </footer>
  );
}
