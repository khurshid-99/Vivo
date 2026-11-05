"use client";

import Navbar from "@/components/Navbar";
import { LocationIcon, VivoExclusiveStoreBanner } from "@/data/Images";
import Image from "next/image";
import { useEffect, useState } from "react";

export const statesData = [
  { id: 131184, name: "Andhra Pradesh" },
  { id: 131179, name: "Bihar" },
  { id: 131362, name: "Goa" },
  { id: 131190, name: "Gujarat" },
  { id: 131187, name: "Haryana" },
  { id: 131278, name: "Jammu & Kashmir" },
  { id: 131210, name: "Jharkhand" },
  { id: 131173, name: "Karnataka" },
  { id: 131206, name: "Kerala" },
  { id: 131274, name: "Madhya Pradesh" },
  { id: 131193, name: "Maharashtra" },
  { id: 131225, name: "New Delhi" },
  { id: 131177, name: "Odisha" },
  { id: 131243, name: "Punjab" },
  { id: 131175, name: "Rajasthan" },
  { id: 131374, name: "Sikkim" },
  { id: 131181, name: "Tamil Nadu" },
  { id: 131171, name: "Telangana" },
  { id: 131268, name: "Uttarakhand" },
  { id: 131195, name: "Uttar Pradesh" },
  { id: 131203, name: "West Bengal" },
];

export const storeLocatorData = [
  {
    region: "India",
    state: "Andhra Pradesh",
    cities: [
      {
        name: "Anantapur",
        stores: [
          {
            name: "Lalitha Electronics -KDR(Area)",
            address:
              "1/745/21, జె.పి. కాంప్లెక్స్, బైపాస్ రోడ్, కదిరి, అనంతపురం",
            location: {
              lat: 14.115404,
              lng: 78.159816,
            },
            phone: "9000891375",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Gajuwaka",
        stores: [
          {
            name: "GANESH MOBILES EXCLUSIVE SHOWROOM STORE",
            address:
              "షాప్ నెం. 3, శ్రీ కన్య కాంప్లెక్స్, మెయిన్ రోడ్, ఓల్డ్ గాజువాక, విశాఖపట్టణం – 530026",
            location: {
              lat: 17.68602,
              lng: 83.20791,
            },
            phone: "7842856097",
            businessHours: {
              summer: "09:00 AM - 09:30 PM",
              winter: "09:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Narsipatnam",
        stores: [
          {
            name: "S V G MOBILES EXCLUSIVE SHOWROOM (STORE)",
            address:
              "36/71, రామారావు పెట, కల్యాణ్ మెడికల్స్ ఎదురుగా, నర్సిపట్నం, విశాఖపట్టణం, ఆంధ్ర ప్రదేశ్ – 531116",
            location: {
              lat: 17.661821,
              lng: 82.614682,
            },
            phone: "8497958733",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Tanuku",
        stores: [
          {
            name: "VIVO EXCLUSIVE STORE - TANUKU(Area)",
            address:
              "33-1-42, షాప్ నెం. 3, రాష్ట్రపతి రోడ్డు, తణుకు, పశ్చిమ గోదావరి జిల్లా, ఆంధ్రప్రదేశ్, 534211 [1]",
            location: {
              lat: 16.7572,
              lng: 81.68,
            },
            phone: "8331999983",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Ankapalle",
        stores: [
          {
            name: "MANTRA MOBILES - AKP (EXCLUSIVE SHOWROOM STORE)",
            address:
              "12-7-77, అనకపల్లి మెయిన్ రోడ్, అరుంధతి నగర్, గవరపాలెం, అనకపల్లి, ఆంధ్ర ప్రదేశ్ – 531001",
            location: {
              lat: 17.68823,
              lng: 83.00686,
            },
            phone: "9652150444",
            businessHours: {
              summer: "10:00 AM - 10:00 PM",
              winter: "10:00 AM - 10:00 PM",
            },
          },
        ],
      },
      {
        name: "Kadapa",
        stores: [
          {
            name: "PRIME MOBILES EXCLUSIVE STORE - KDP (STORE)",
            address:
              "4/732-17, ఓల్డ్ బస్ స్టాండ్ రోడ్, రెవెన్యూ వార్డు నెం. 4, కడప - 516001.",
            location: {
              lat: 14.47478,
              lng: 78.822528,
            },
            phone: "6305808742",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Nellore",
        stores: [
          {
            name: "SRI MOBILES EXCLUSIVE SHOWROOM (NELLORE AREA)",
            address:
              "గ్రౌండ్ ఫ్లోర్, 15/210, ఆర్.ఆర్. స్ట్రీట్, ట్రంక్ రోడ్, నెల్లూరు – 524001, ఆంధ్ర ప్రదేశ్",
            location: {
              lat: 14.455796,
              lng: 79.983577,
            },
            phone: "8125522623",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Vijayawada",
        stores: [
          {
            name: "SHOWROOM-VIJAYAWADA STORE",
            address:
              "29-37-15, విజయవాడ మున్సిపల్ కార్పొరేషన్, రెవెన్యూ వార్డ్ 21, ఎలూరు రోడ్, విజయవాడ – 520002",
            location: {
              lat: 16.513951,
              lng: 80.630202,
            },
            phone: "9182301433",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
          {
            name: "VIVO EXPERIENCE CENTER VIJAYAWADA - MOKSHA (STORE)",
            address:
              "ఈ చిరునామా తెలుగులో: డోర్ నెం. 58-1-1/2, ఎన్టీఆర్ సర్కిల్ పక్కన, విజయ్ సేల్స్ ఎదురుగా, ఎం.జి. రోడ్, విజయవాడ, కృష్ణా జిల్లా, ఆంధ్రప్రదేశ్, 520010.",
            location: {
              lat: 16.496485,
              lng: 80.65833,
            },
            phone: "7013257742",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Eluru",
        stores: [
          {
            name: "VIVO EXCLUSIVE SHOWROOM ELURU - MOKSHA (STORE)",
            address:
              "గ్రౌండ్ ఫ్లోర్, షాప్ నెం. 6, 23A-10-5/6, అగ్రాజ్ ప్లాజా, రామచంద్ర రావు పెట్, ఏలూరు, ఆంధ్ర ప్రదేశ్ – 534002",
            location: {
              lat: 16.712809,
              lng: 81.100692,
            },
            phone: "9004623028",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Kurnool",
        stores: [
          {
            name: "SK ENTERPRISES EXCLUSIVE SHOWROOM (STORE)",
            address:
              "షాప్ నెం: 40-384, భాగీరథి షాపింగ్ కాంప్లెక్స్, పార్క్ రోడ్, గాంధీనగర్, కర్నూలు, ఆంధ్ర ప్రదేశ్ – 518001",
            location: {
              lat: 15.82949,
              lng: 78.04358,
            },
            phone: "7671003345",
            businessHours: {
              summer: "09:30 AM - 09:30 PM",
              winter: "09:30 AM - 09:30 PM",
            },
          },
        ],
      },
      {
        name: "Rajahmundry",
        stores: [
          {
            name: "VIVO EXCLUSIVE SHOWROOM RAJAHMUNDRY - MOKSHA (STORE)",
            address:
              "గ్రౌండ్ ఫ్లోర్, 30-1-13, వెస్ట్ సైడ్ షాప్, జండా పంజా రోడ్, రాజమహేంద్రవరం, తూర్పు గోదావరి, ఆంధ్రప్రదేశ్ - 533101.",
            location: {
              lat: 17.005718,
              lng: 81.773793,
            },
            phone: "7304389510",
            businessHours: {
              summer: "10:00 AM - 09:30 PM",
              winter: "10:00 AM - 09:30 PM",
            },
          },
        ],
      },
    ],
  },
  {
    region: "India",
    state: "West Bengal",
    cities: [
      {
        name: "Barasat",
        stores: [
          {
            name: "vivo Exclusive Store - New SBT Communications",
            address:
              "2460/2 কৃষ্ণনগর রোড, কলোনি মোড়। জেলা: উত্তর 24 পরগণা, বারাসাত পশ্চিমবঙ্গ - 700124",
            location: {
              lat: 22.723926,
              lng: 88.478839,
            },
            phone: "9831421223",
            businessHours: {
              summer: "11:00 AM - 09:00 PM",
              winter: "11:00 AM - 09:00 PM",
            },
          },
        ],
      },
      {
        name: "Kolkata",
        stores: [
          {
            name: "vivo Experience Center, South City Mall",
            address:
              "Unit No- B 006B, South City Mall, Lower Basement, 375 Prince Anwar Shah Road In South City Mall, Jadavpur, Kolkata-700068",
            location: {
              lat: 22.5017,
              lng: 88.3617,
            },
            phone: "3340716126",
            businessHours: {
              summer: "11:00 AM - 09:00 PM",
              winter: "11:00 AM - 09:00 PM",
            },
          },
        ],
      },
      {
        name: "Chandannagar",
        stores: [
          {
            name: "vivo Exclusive Store - Mobile Station Enterprise Private Limited",
            address:
              "482, চন্দননগর স্টেশন রোড, মধ্যাঞ্চল, চন্দননগর, হুগলি-712136",
            location: {
              lat: 22.864735,
              lng: 88.363707,
            },
            phone: "9830650401",
            businessHours: {
              summer: "11:00 AM - 09:00 PM",
              winter: "11:00 AM - 09:00 PM",
            },
          },
        ],
      },
      {
        name: "Siliguri",
        stores: [
          {
            name: "vivo Exclusive Store",
            address:
              "Mla House Ground Floor, 2Nd Mile Sevoke Road, Siliguri, West Bengal -734001",
            location: {
              lat: 26.737342,
              lng: 88.434507,
            },
            phone: "9147337665",
            businessHours: {
              summer: "11:00 AM - 09:00 PM",
              winter: "11:00 AM - 09:00 PM",
            },
          },
        ],
      },
      {
        name: "Howrah",
        stores: [
          {
            name: "vivo Experience Center, Avani Mall",
            address:
              "Vivo (Ttpl), Ground Floor, Shop No 38 & 39, Avani Riverside Mall, 32, Jagat Banerjee Ghat Road, Howrah – 711102",
            location: {
              lat: 22.563235,
              lng: 88.323646,
            },
            phone: "3348078909",
            businessHours: {
              summer: "11:00 AM - 09:00 PM",
              winter: "11:00 AM - 09:00 PM",
            },
          },
          {
            name: "vivo Exclusive Store - Bhajanlal Commercial Pvt. Ltd.",
            address: "২১/১ ডবসন রোড, নিচতলা, গোলবাড়ি, সালকিয়া, হাওড়া-৭১১০৬",
            location: {
              lat: 22.591465,
              lng: 88.341322,
            },
            phone: "9038023333",
            businessHours: {
              summer: "11:00 AM - 09:00 PM",
              winter: "11:00 AM - 09:00 PM",
            },
          },
        ],
      },
    ],
  },
];

type Store = {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  phone: string;
  businessHours: {
    summer: string;
    winter: string;
  };
};

type City = {
  name: string;
  stores: Store[];
};

export default function page() {
  const [selectedStated, setSelectedStated] = useState<string>("");
  const [selectedCitys, setSelectedCitys] = useState<City[] | null>([]);
  const [city, setCity] = useState("");
  const [cityStoreLocations, setCityStoreLocations] = useState<Store[]>([]);
  const [toggele, setToggele] = useState<boolean>(true);

  const getState = (state: string) => {
    const store = storeLocatorData.find((item) => item.state === state);

    setSelectedStated(state);
    setSelectedCitys(store?.cities ?? []);
    setCity("");
    setCityStoreLocations([]);

    if (selectedStated) {
      setToggele(false);
    }
  };

  const handleStoreLocations = (cityName: string) => {
    setCity(cityName);

    const locations = selectedCitys?.find((item) => item.name === cityName);

    setCityStoreLocations(locations?.stores ?? []);
  };

  useEffect(() => {
    getState("Andhra Pradesh");
  }, []);

  return (
    <main className="relative ">
      <Navbar style="text-charcoal-blue bg-[red] " />

      <header className="relative w-full aspect-1920/908 ">
        <Image
          src={VivoExclusiveStoreBanner}
          alt=""
          className="w-full h-full object-center object-cover "
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-20r ">
          <div>
            <h1 className="text-46r text-charcoal-blue font-A2 ">
              vivo Exclusive stores
            </h1>
            <p className="text-20r text-charcoal-blue font-A2 text-center ">
              Find the store near you.
            </p>
          </div>
          {/*  */}
          <div className="w-590r  bg-white rounded-25p ">
            <div className="flex items-center justify-between py-13r px-28r ">
              <div className="flex items-center gap-10r ">
                <Image src={LocationIcon} alt="" />
                <span className="text-16r text-slate-gray ">
                  {selectedStated && city
                    ? `${selectedStated}, ${city} `
                    : " Select a location"}
                </span>
              </div>
              <i>/</i>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 pt-10r pb-29r border-b border-platinum-gray px-28r  ">
              <div
                onClick={() => setToggele(true)}
                className={`w-264r text-14r text-center font-A2  py-15r rounded-12p cursor-pointer ${toggele ? " bg-bright-royal-blue text-white " : "bg-light-cool-gray text-slate-gray "} `}
              >
                State/Area
              </div>
              <div
                onClick={() => setToggele(false)}
                className={`w-264r text-14r text-center font-A2  py-15r rounded-12p cursor-pointer ${!toggele ? " bg-bright-royal-blue text-white " : "bg-light-cool-gray text-slate-gray "} `}
              >
                District
              </div>
            </div>
            {/*  */}
            <div
              onWheel={(e) => e.stopPropagation()}
              className="max-h-[300px] overflow-y-auto grid grid-cols-3 pt-13r pb-22r px-28r "
            >
              {toggele
                ? statesData.map(({ id, name }) => (
                    <button
                      key={id}
                      onClick={() => getState(name)}
                      className={`text-14r text-slate-gray font-A2 px-18r py-8r rounded-12p  cursor-pointer ${selectedStated === name ? "bg-bright-royal-blue text-white " : ""} `}
                    >
                      {name}
                    </button>
                  ))
                : selectedCitys &&
                  selectedCitys?.map(({ name }) => (
                    <button
                      key={name}
                      onClick={() => handleStoreLocations(name)}
                      className={`text-14r text-slate-gray font-A2 px-18r py-8r rounded-12p  cursor-pointer ${city === name ? "bg-bright-royal-blue text-white " : ""} `}
                    >
                      {name}
                    </button>
                  ))}

              {}
            </div>
          </div>
        </div>
      </header>
      <section className="mx-auto w-1440r aspect-1440/980 bg-[red] "></section>
    </main>
  );
}
