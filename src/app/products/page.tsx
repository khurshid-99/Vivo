import Navbar from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { X300 } from "@/data/Images";
import Image from "next/image";

export default function Products() {
  return (
    <main className="bg-light-cool-gray ">
      <Navbar style="!text-charcoal-blue " />

      <div className="max-w-1440r mx-auto text-center pt-140r pb-80r ">
        <h1 className="text-46r text-charcoal-blue font-A2 ">
          Find the phone that's right for you
        </h1>
      </div>
      <nav className="max-w-1440r mx-auto ">
        <ul className="w-full grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] bg-white text-20r text-slate-gray text-center capitalize px-165r py-45r items-center justify-center-safe font-A2 rounded-24p  ">
          <li className=" ">
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              All models
            </button>
          </li>
          <li>
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              X Series
            </button>
          </li>
          <li>
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              V Series
            </button>
          </li>
          <li>
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              Y Series
            </button>
          </li>
          <li>
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              Series T
            </button>
          </li>
          <li>
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              S Series
            </button>
          </li>
          <li>
            <button className="bg-white hover:bg-bright-royal-blue hover:text-white duration-300 px-14r py-10r rounded-10p w-fit">
              Accessories
            </button>
          </li>
        </ul>
      </nav>
      <section className="max-w-1440r mx-auto grid grid-cols-3 gap-30r pt-30r ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <div className="max-w-1440r mx-auto pt-80r pb-120r ">
        <p className="text-22r text-slate-gray font-A2 text-center ">
          No more content
        </p>
      </div>
    </main>
  );
}
