"use client";

import {
  Buds,
  HomeBanner,
  S2,
  S2FE,
  T5,
  Twitter,
  Vision,
  X300,
  XFold6,
} from "@/data/Images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-light-cool-gray ">
      {/*  */}
      <header className="w-full aspect-1920/920 ">
        <Image
          src={HomeBanner}
          alt="Banner"
          priority
          loading="eager"
          className="w-full h-full "
        />
      </header>
      {/*  */}
      <section className="max-w-1600r mx-auto p-80r grid grid-cols-1 gap-40r ">
        <h2 className="text-40r text-charcoal-blue font-A2 ">
          More new products
        </h2>
        <div className="w-1440r aspect-1440/640  rounded-25p overflow-hidden ">
          <Image
            src={XFold6}
            alt="X fold 6"
            className="w-full h-full hover:scale-105 duration-700 "
          />
        </div>
        <div className="w-1440r aspect-1440/640 bg-[green] rounded-25p overflow-hidden ">
          <Image
            src={Vision}
            alt="X fold 6"
            className="w-full h-full hover:scale-105 duration-700 "
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1600r mx-auto p-80r  ">
        <h2 className="text-40r text-charcoal-blue font-A2 mb-40r">DISCOVER</h2>
        <div className="grid grid-cols-3 gap-x-37r ">
          <div className="col-span-1 grid grid-rows-2 gap-y-35r ">
            <div className="relative w-455r aspect-455/340 rounded-25p overflow-hidden">
              <Image
                src={X300}
                alt=""
                className="object-cover object-center hover:scale-105 duration-300"
              />
            </div>

            <div className="relative w-455r aspect-455/340 rounded-25p overflow-hidden">
              <Image
                src={T5}
                alt=""
                className="object-cover object-center hover:scale-105 duration-300"
              />
            </div>
          </div>

          <div className="relative w-455r aspect-455/715 col-span-1 row-span-2 rounded-25p overflow-hidden ">
            <Image
              src={S2FE}
              alt=""
              className="rounded-25p object-cover object-center hover:scale-105 duration-300"
            />
          </div>

          <div className="col-span-1 grid grid-rows-2 gap-y-35r ">
            <div className="relative w-455r aspect-455/340 rounded-25p overflow-hidden">
              <Image
                src={Buds}
                alt=""
                className="object-cover object-center hover:scale-105 duration-300"
              />
            </div>

            <div className="relative w-455r aspect-455/340 rounded-25p overflow-hidden ">
              <Image
                src={S2}
                alt=""
                className=" object-cover object-center hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      
    </main>
  );
}
