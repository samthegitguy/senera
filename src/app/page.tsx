"use client";

import { useEffect } from "react";

import Image from "next/image";

import anim from "./anim";

export default function Home() {
  useEffect(() => {
    anim(
      document.getElementById("silverBar") as HTMLElement,
      document.getElementById("type") as HTMLElement
    );
    // Bad practice, fix this
  }, []);
  return (
    <main>
      <div className="bg-zinc-600 dark:bg-zinc-950 h-screen grid grid-cols-3 grid-rows-3 gap-1 content-start text-white space-x-3">
        {/* Hero */}

        <div className="col-start-2 row-start-2 flex items-center justify-center">
          <Image
            src="/iron-ingot.png"
            id="silverBar"
            alt="Silver bar go brr"
            height={100000} // Adjust height as needed
            width={270} // Adjust width as needed
            className={"inline-block -mr-3 z-0"} // Adjust the size
          />
          <span
            id="type"
            className="inline-block text-center text-9xl italic font-[family-name:var(--font-montserrat)] z-10"
          >
            senera
          </span>
        </div>
      </div>
    </main>
  );
}
