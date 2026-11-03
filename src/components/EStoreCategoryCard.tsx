import Image, { StaticImageData } from "next/image";

interface ECardProps {
  title: string;
  img: StaticImageData | string;
}

export default function EStoreCategoryCard({ title, img }: ECardProps) {
  return (
    <div className="w-285r aspect-285/220 bg-white px-10r pt-18r pb-10r flex flex-col items-center justify-center rounded-18p ">
      <h3 className="text-26r text-dark-charcoal font-A ">{title}</h3>
      <div>
        <Image
          src={img}
          alt=""
          className="w-150r aspect-square object-center object-cover"
        />
      </div>
    </div>
  );
}
