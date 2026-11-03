import { JustLaunched } from "@/data/Images";
import Image from "next/image";

interface EBannerCardProps {
  title: string;
}

export default function EStoreLatestBannerCard({ title }: EBannerCardProps) {
  return (
    <>
      <div className="pt-64r pb-30r ">
        <h1 className="text-30r text-dark-charcoal font-A ">{title}</h1>
      </div>
      <div className="w-full aspect-1200/450 ">
        <Image
          src={JustLaunched}
          alt=""
          className="w-full h-full object-center object-cover rounded-18p "
        />
      </div>
    </>
  );
}
