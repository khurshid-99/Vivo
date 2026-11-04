import EStoreProductCard from "@/components/EStoreProductCard";
import EStoreCategoryCard from "@/components/EStoreCategoryCard";
import {
  Accessories,
  Accessories1,
  Accessories2,
  Accessories3,
  EStoreBanner,
  JustLaunched,
  NoCostEMI,
  PriceGuarantee,
  SecurePayments,
  ServiceSupport,
  Smartphones,
  StudentProgram,
  VivoLive,
} from "@/data/Images";
import Image from "next/image";
import EStoreLatestBannerCard from "@/components/EStoreLatestBannerCard";
import Link from "next/link";

export default function EStore() {
  return (
    <main className="bg-light-cool-gray ">
      <header className="w-full aspect-1920/560">
        <Image src={EStoreBanner} alt="" className="w-full h-full " />
      </header>
      <section className="max-w-1200r mx-auto flex items-center justify-between pt-50r">
        <EStoreCategoryCard title="Smartphones" img={Smartphones} />
        <EStoreCategoryCard title="Student Program" img={StudentProgram} />
        <EStoreCategoryCard title="Accessories" img={Accessories} />
        <EStoreCategoryCard title="vivo Live" img={VivoLive} />
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <div className="pt-64r pb-30r ">
          <h1 className="text-30r text-dark-charcoal font-A ">Just Launched</h1>
        </div>
        <div className="w-full aspect-1200/450 ">
          <Image
            src={JustLaunched}
            alt=""
            className="w-full h-full object-center object-cover rounded-18p "
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <div className="pt-64r pb-30r flex items-center justify-between ">
          <h1 className="text-30r text-dark-charcoal font-A ">Accessories</h1>
          <button className="text-22r text-dim-gray font-A ">More</button>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 gap-18r  ">
          <div className="col-span-2 rounded-18p overflow-hidden ">
            <Image
              src={Accessories1}
              alt=""
              className="w-full h-full object-cover object-center "
            />
          </div>
          <EStoreProductCard
            img={Accessories2}
            title="vivo Buds"
            color="Basalt Black"
            price={"1,999.00"}
            oldPrice={"2,999.00"}
            off={33}
          />
          <EStoreProductCard
            img={Accessories2}
            title="vivo Buds"
            color="Basalt Black"
            price={"1,999.00"}
            oldPrice={"2,999.00"}
            off={33}
          />
          <EStoreProductCard
            img={Accessories2}
            title="vivo Buds"
            color="Basalt Black"
            price={"1,999.00"}
            oldPrice={"2,999.00"}
            off={33}
          />
          <EStoreProductCard
            img={Accessories2}
            title="vivo Buds"
            color="Basalt Black"
            price={"1,999.00"}
            oldPrice={"2,999.00"}
            off={33}
          />
          <EStoreProductCard
            img={Accessories2}
            title="vivo Buds"
            color="Basalt Black"
            price={"1,999.00"}
            oldPrice={"2,999.00"}
            off={33}
          />
          <EStoreProductCard
            img={Accessories2}
            title="vivo Buds"
            color="Basalt Black"
            price={"1,999.00"}
            oldPrice={"2,999.00"}
            off={33}
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto">
        <div className="pt-64r pb-30r flex items-center justify-between ">
          <h1 className="text-30r text-dark-charcoal font-A ">Series T</h1>
          <button className="text-22r text-dim-gray font-A ">More</button>
        </div>
        <div className="grid grid-cols-4 justify-between ">
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <div className="pt-64r pb-30r ">
          <h1 className="text-30r text-dark-charcoal font-A ">
            Flagship - X Series
          </h1>
        </div>
        <div className="w-full aspect-1200/450 ">
          <Image
            src={JustLaunched}
            alt=""
            className="w-full h-full object-center object-cover rounded-18p "
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <div className="pt-64r pb-30r flex items-center justify-between ">
          <h1 className="text-30r text-dark-charcoal font-A ">
            ZEISS Image. Go Further.
          </h1>
          <button className="text-22r text-dim-gray font-A ">More</button>
        </div>
        <div className="grid grid-cols-4 justify-between ">
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <EStoreLatestBannerCard title="Portrait So Pro" />
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <div className="pt-64r pb-30r flex items-center justify-between ">
          <h1 className="text-30r text-dark-charcoal font-A ">V Series</h1>
          <button className="text-22r text-dim-gray font-A ">More</button>
        </div>
        <div className="grid grid-cols-4 justify-between ">
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <EStoreLatestBannerCard title="My New Story" />
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto ">
        <div className="pt-64r pb-30r flex items-center justify-between ">
          <h1 className="text-30r text-dark-charcoal font-A ">S2 Series</h1>
          <button className="text-22r text-dim-gray font-A ">More</button>
        </div>
        <div className="grid grid-cols-4 justify-between ">
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
        </div>
      </section>
      {/*  */}
      <section className="max-w-1200r mx-auto pb-90r ">
        <div className="pt-64r pb-30r flex items-center justify-between ">
          <h1 className="text-30r text-dark-charcoal font-A ">Y Series</h1>
          <button className="text-22r text-dim-gray font-A ">More</button>
        </div>
        <div className="grid grid-cols-4 justify-between ">
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
          <EStoreProductCard
            img={Accessories3}
            title="Series T"
            color="8GB+128GB Glacier Blue"
            price={"41,999.00"}
            oldPrice={"55,999.00"}
            off={25}
          />
        </div>
      </section>
      {/*  */}
      <section className="bg-white pt-64r pb-30r ">
        <ul className="max-w-1200r mx-auto grid grid-cols-5 pb-20r border-b border-light-gray  ">
          <li>
            <Link href={""} className="flex flex-col items-center gap-10r ">
              <Image
                src={PriceGuarantee}
                alt=""
                className="w-60r aspect-square object-cover object-center "
              />
              <span className="text-16r text-dim-gray font-A2 text-center ">
                {" "}
                15 Days Price Guarantee
              </span>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center gap-10r ">
              <Image
                src={NoCostEMI}
                alt=""
                className="w-60r aspect-square object-cover object-center "
              />
              <span className="text-16r text-dim-gray font-A2 text-center ">
                {" "}
                No Cost EMIe
              </span>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center gap-10r ">
              <Image
                src={ServiceSupport}
                alt=""
                className="w-60r aspect-square object-cover object-center "
              />
              <span className="text-16r text-dim-gray font-A2 text-center ">
                {" "}
                Free Shipping on orders above Rs.500
              </span>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center gap-10r ">
              <Image
                src={SecurePayments}
                alt=""
                className="w-60r aspect-square object-cover object-center "
              />
              <span className="text-16r text-dim-gray font-A2 text-center ">
                {" "}
                100% Secure Payments
              </span>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center gap-10r ">
              <Image
                src={ServiceSupport}
                alt=""
                className="w-60r aspect-square object-cover object-center "
              />
              <span className="text-16r text-dim-gray font-A2 text-center ">
                24*7 Service Support
              </span>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
