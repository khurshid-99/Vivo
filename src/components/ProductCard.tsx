import { X300 } from "@/data/Images";
import Image from "next/image";
import React from "react";

export const ProductCard = () => {
  return (
    <div className="w-460r aspect-460/612 pt-70r pb-60r px-70r bg-white rounded-24p flex flex-col justify-between ">
      <Image
        src={X300}
        alt=""
        className="w-320r aspect-square object-cover object-center "
      />
      <div className="flex items-center justify-center gap-4r ">
        <span className="w-32r aspect-32/28 rounded-24p border border-[#b06166] flex items-center justify-center ">
          <span className="inline-block w-22r aspect-22/18 rounded-10p bg-[#b06166] "></span>
        </span>
        {/*  */}
        <span className="w-32r aspect-32/28 rounded-24p border border-[#b06166] flex items-center justify-center ">
          <span className="inline-block w-22r aspect-22/18 rounded-10p bg-[#b06166] "></span>
        </span>
      </div>
      <p className="text-24r text-charcoal-blue font-A2 text-center ">X300</p>
    </div>
  );
};
