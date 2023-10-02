import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center px-12 lg:px-[100px] py-6">
      <Link href={'/'} className="">
        <div className="flex items-center gap-2">
          <img src="/Layer 2.png"  alt=""/>
          <h3>Help me out</h3>
        </div>
      </Link>

      <ul className=" hidden md:flex gap-4">
        <li>Features</li>
        <li>How it works</li>
      </ul>

      <Link href={"/signin"}>
       <button className="hidden md:block cursor-pointer ">
        Get started
       </button>
      </Link>
    </nav>
  )
}