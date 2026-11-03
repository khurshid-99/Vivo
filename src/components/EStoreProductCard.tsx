import { Accessories2 } from "@/data/Images";
import Image, { StaticImageData } from "next/image";

interface EAccessorieProps {
  img: StaticImageData;
  title: string;
  color: string;
  price: number | string;
  oldPrice: number | string;
  off: number | string;
}

export default function EStoreProductCard({
  img,
  title,
  color,
  price,
  oldPrice,
  off,
}: EAccessorieProps) {
  return (
    <div className="w-285r aspect-285/440 bg-white rounded-18p overflow-hidden px-30r pt-40r pb-22r flex flex-col items-center text-center justify-between ">
      <Image
        src={img}
        alt=""
        className="w-210r aspect-square object-center object-cover "
      />
      <div className="">
        <h3 className="text-26r text-dark-charcoal font-A capitalize ">
          {title}
        </h3>
        <p className="text-18r text-dark-charcoal font-A3 ca\ ">{color}</p>
      </div>
      <div>
        <p className="text-26r text-crimson-red font-A3 ">₹{price}</p>
        <p className="text-18r text-dim-gray font-A3  ">
          <span className="line-through"> ₹{oldPrice}</span>
          <span className="text-14r text-deep-teal leading-5 px-3r border border-deep-teal rounded-6p ml-6r ">
            -{off}%
          </span>
        </p>
      </div>
    </div>
  );
}
