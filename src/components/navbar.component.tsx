import Link from "next/link";
import theseonLogo from "@/../public/theseon-logo.svg";
import Image from "next/image";
import React from "react";

type Props = {};

export default function NavbarComponent({}: Props) {
  return (
    <>
      <div className="group z-10 items-center lg:justify-between font-mono text-sm lg:flex fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link
          className="rounded-lg border border-transparent px-2 py-2 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          href={"/"}
        >
          <Image
            src={theseonLogo}
            alt="theseon. Logo"
            className="block mx-3 h-12 sm:mx-0 sm:shrink-0"
            width={48}
            height={48}
            priority
          />
        </Link>
        <div className="group">
          <Link
            className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href={"/"}
          >
            <code className="font-mono font-bold">Home</code>
          </Link>

          <Link
            className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href={"/login"}
          >
            <code className="font-mono font-bold">Login</code>
          </Link>
          <Link
            className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            href={"/register"}
          >
            <code className="font-mono font-bold">Register</code>
          </Link>
        </div>
      </div>
    </>
  );
}
