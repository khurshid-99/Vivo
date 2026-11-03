import { Twitter } from "@/data/Images";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-charcoal-blue pt-75r ">
      <div className="max-w-1440r mx-auto pb-50r flex items-start justify-between ">
        <div className="w-745r grid grid-cols-4 gap-x-16r ">
          <div>
            <h4 className="text-16r text-white font-A4 ">Popular Links</h4>
            <ul className="text-14r text-cadet-grey font-A grid grid-cols-1 grid-rows-auto gap-y-22r pt-40r">
              <li>
                <Link href={""}>X300 Pro</Link>
              </li>
              <li>
                <Link href={""}>X300</Link>
              </li>
              <li>
                <Link href={""}>V70</Link>
              </li>
              <li>
                <Link href={""}>V70 Elite</Link>
              </li>
              <li>
                <Link href={""}>T5e</Link>
              </li>
              <li>
                <Link href={""}>All Models</Link>
              </li>
              <li>
                <Link href={""}>vivo ZEISS co-engineered Imaging</Link>
              </li>
              <li>
                <Link href={""}>vivo Exclusive store</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-16r text-white font-A4 ">Purchase Online</h4>
            <ul className="text-14r text-cadet-grey font-A grid grid-cols-1 grid-rows-auto gap-y-22r pt-40r">
              <li>
                <Link href={""}>E-store</Link>
              </li>
              <li>
                <Link href={""}>Buy phones</Link>
              </li>
              <li>
                <Link href={""}>Buy accessories</Link>
              </li>
              <li>
                <Link href={""}>My orders</Link>
              </li>
              <li>
                <Link href={""}>Privacy Terms for E-Store</Link>
              </li>
              <li>
                <Link href={""}>Payment Terms and Policies</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-16r text-white font-A4  ">Support</h4>
            <ul className="text-14r text-cadet-grey font-A grid grid-cols-1 grid-rows-auto gap-y-22r pt-40r">
              <li>
                <Link href={""}>FAQs</Link>
              </li>
              <li>
                <Link href={""}>Service Center</Link>
              </li>
              <li>
                <Link href={""}>Funtouch OS</Link>
              </li>
              <li>
                <Link href={""}>IMEI Authentication</Link>
              </li>
              <li>
                <Link href={""}>Query of Spare Parts Price</Link>
              </li>
              <li>
                <Link href={""}>System Update</Link>
              </li>
              <li>
                <Link href={""}>Write to CEO</Link>
              </li>
              <li>
                <Link href={""}>Privacy Statement for Customer Service</Link>
              </li>
              <li>
                <Link href={""}>Download LUTs for Restoring Log</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-16r text-white font-A4  ">About vivo</h4>
            <ul className="text-14r text-cadet-grey font-A grid grid-cols-1 grid-rows-auto gap-y-22r pt-40r">
              <li>
                <Link href={""}>E-waste Management</Link>
              </li>
              <li>
                <Link href={""}>Careers at vivo</Link>
              </li>
              <li>
                <Link href={""}>Terms and Conditions</Link>
              </li>
              <li>
                <Link href={""}>Investor Information</Link>
              </li>
              <li>
                <Link href={""}>Equal Opportunity Policy</Link>
              </li>
              <li>
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <Link href={""}>Newsroom</Link>
              </li>
              <li>
                <Link href={""}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <div>
          <ul className="flex flex-col items-start gap-14r ">
            <li className="">
              <Link href={""} className="flex items-start gap-1 ">
                <i className="text-28r text-cadet-grey font-A4 font-normal not-italic leading-11 ">
                  &#xD013;
                </i>

                <p>
                  <span className="block text-16r text-cadet-grey font-A2  mt-1.25">
                    24*7
                  </span>
                  <span className="text-28r text-white font-A2 block">
                    1800-208-3388
                  </span>
                </p>
              </Link>
            </li>
            <li className="">
              <Link href={""} className="flex items-start gap-1 ">
                <i className="text-28r text-cadet-grey font-A4 font-normal not-italic leading-11 ">
                  &#xD013;
                </i>

                <p>
                  <span className="block text-16r text-cadet-grey font-A2  mt-1.25">
                    24*7
                  </span>
                  <span className="text-28r text-white font-A2 block">
                    1800-208-3388
                  </span>
                </p>
              </Link>
            </li>
            <li className="">
              <Link href={""} className="flex items-start gap-1 ">
                <i className="text-28r text-cadet-grey font-A4 font-normal not-italic leading-11 ">
                  &#xD013;
                </i>

                <p>
                  <span className="block text-16r text-cadet-grey font-A2  mt-1.25">
                    24*7
                  </span>
                  <span className="text-28r text-white font-A2 block">
                    1800-208-3388
                  </span>
                </p>
              </Link>
            </li>
            <li>
              <Link href={""} className="flex items-end gap-6r ">
                <i className="text-28r text-cadet-grey font-A4 font-normal not-italic leading-11 w-28r aspect-square text-start ">
                  &#xD01D;
                </i>
                <span className=" text-16r text-cadet-grey font-A2 ">
                  WhatsApp (24*7)
                </span>
              </Link>
            </li>
            <li>
              <Link href={""} className="flex items-end gap-6r ">
                <i className="text-18r text-cadet-grey font-A4 font-normal not-italic leading-11  w-28r aspect-square ml-3r  ">
                  &#xD010;
                </i>
                <span className=" text-16r text-cadet-grey font-A2 ">
                  Email us (Reply in 24h)
                </span>
              </Link>
            </li>
            <li>
              <Link href={""} className="flex items-end gap-6r ">
                <i className="text-28r text-cadet-grey font-A4 font-normal not-italic leading-11  w-28r aspect-square ">
                  &#xD01D;
                </i>
                <span className=" text-16r text-cadet-grey font-A2 ">
                  Chat with us (9 AM-6 PM)
                </span>
              </Link>
            </li>
          </ul>
          {/*  */}
          <div className="flex gap-6r pt-34r ">
            <i className="text-28r text-cadet-grey font-A4 font-normal not-italic leading-11 ">
              &#xD012;
            </i>
            <div className=" ">
              <p className="text-16r text-cadet-grey font-A2 mb-10r">
                Follow us
              </p>
              <ul className="grid grid-cols-5 gap-x-10r ">
                <li>
                  <Link href={""}>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 40 34"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-40r h-35r "
                    >
                      <g
                        id="海外一期"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="切图颜色"
                          transform="translate(-170.000000, -241.000000)"
                        >
                          <g
                            id="facebook"
                            transform="translate(170.000000, 241.000000)"
                          >
                            <path
                              className="blue-hover"
                              d="M17,0 L23,0 C32.3888407,-1.72470207e-15 40,7.61115925 40,17 C40,26.3888407 32.3888407,34 23,34 L17,34 C7.61115925,34 1.14980138e-15,26.3888407 0,17 C-1.14980138e-15,7.61115925 7.61115925,1.72470207e-15 17,0 Z"
                              id="矩形"
                              fill="#BDBFC2"
                            ></path>
                            <path
                              className="white-hover"
                              d="M25,11.0744073 L25,8 L22.3459055,8 L22.3459055,8.01288844 C18.8614848,8.13345284 18.145777,10.0566138 18.0838475,12.0770432 L18.0766877,14.2125912 L16,14.2125912 L16,17.2873313 L18.0766877,17.2873313 L18.0766877,26 L21.8025539,26 L21.8025539,17.2873313 L24.4719471,17.2873313 L25,14.2125912 L21.8025539,14.2125912 L21.8025539,12.3039524 C21.8025539,11.6246469 22.2640264,11.0744073 22.9231899,11.0744073 L25,11.0744073 Z"
                              id="Fill-1"
                              fill="#242933"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 40 34"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-40r h-35r "
                    >
                      <g
                        id="海外一期"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="切图颜色"
                          transform="translate(-222.000000, -241.000000)"
                        >
                          <g
                            id="ins"
                            transform="translate(222.000000, 241.000000)"
                          >
                            <path
                              className="blue-hover"
                              d="M17,0 L23,0 C32.3888407,-1.72470207e-15 40,7.61115925 40,17 C40,26.3888407 32.3888407,34 23,34 L17,34 C7.61115925,34 1.14980138e-15,26.3888407 0,17 C-1.14980138e-15,7.61115925 7.61115925,1.72470207e-15 17,0 Z"
                              id="矩形备份-10"
                              fill="#BDBFC2"
                            ></path>
                            <g
                              className="white-hover"
                              id="编组"
                              transform="translate(11.000000, 7.000000)"
                              fill="#242933"
                            >
                              <path
                                d="M9.0000415,6.69406151 C7.34274629,6.69406151 6,8.03681244 6,9.69411338 C6,11.3513106 7.34274629,12.6940615 9.0000415,12.6940615 C10.6572537,12.6940615 12,11.3513106 12,9.69411338 C12,8.03681244 10.6572537,6.69406151 9.0000415,6.69406151"
                                id="Fill-1"
                              ></path>
                              <g id="Fill-3">
                                <path d="M4.23689345,0.75 C1.90706544,0.75 0,2.65801991 0,4.98901396 L0,14.5199948 C0,16.8419801 1.90706544,18.75 4.23689345,18.75 L13.7631285,18.75 C16.0929565,18.75 18,16.8419801 18,14.510986 L18,4.98901396 C17.9909957,2.65801991 16.0839303,0.75 13.7541023,0.75 L4.23689345,0.75 Z M9.0000545,15 C6.09823362,15 3.75,12.6517664 3.75,9.7500545 C3.75,6.84823362 6.09823362,4.5 9.0000545,4.5 C11.9017664,4.5 14.25,6.84823362 14.25,9.7500545 C14.25,12.6517664 11.9017664,15 9.0000545,15 L9.0000545,15 Z M15.0000364,5.25 C14.1755511,5.25 13.5,4.58439236 13.5,3.74996362 C13.5,2.91553489 14.1656076,2.25 15.0000364,2.25 C15.8245459,2.25 16.5,2.91553489 16.5,3.74996362 C16.4900565,4.57454587 15.8245459,5.25 15.0000364,5.25 L15.0000364,5.25 Z"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 40 34"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-40r h-35r "
                    >
                      <g
                        id="海外一期"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="切图颜色"
                          transform="translate(-274.000000, -241.000000)"
                        >
                          <g
                            id="youtube"
                            transform="translate(274.000000, 241.000000)"
                          >
                            <g
                              className="blue-hover"
                              id="编组-14"
                              fill="#BDBFC2"
                            >
                              <path
                                d="M17,0 L23,0 C32.3888407,-1.72470207e-15 40,7.61115925 40,17 C40,26.3888407 32.3888407,34 23,34 L17,34 C7.61115925,34 1.14980138e-15,26.3888407 0,17 C-1.14980138e-15,7.61115925 7.61115925,1.72470207e-15 17,0 Z"
                                id="矩形备份-11"
                              ></path>
                            </g>
                            <g
                              className="white-hover"
                              id="编组"
                              transform="translate(10.000000, 10.000000)"
                              fill="#242933"
                            >
                              <path
                                d="M16.5355059,0 C19.98,0 19.98,3.44528932 19.98,3.44528932 L19.98,3.44528932 L19.98,10.5946252 C19.98,14.0421738 16.5355059,14.0421738 16.5355059,14.04 L3.44220899,14.04 C0.167912634,14.04 0.00819086018,10.9225609 0.000399554155,10.6184205 L0,3.44528932 C0,0.168062893 3.11457458,0.00819818993 3.41843552,0.000399911704 Z M7.56,3.24 L7.56,10.8 L14.04,7.02101435 L7.56,3.24 Z"
                                id="形状结合"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <Image
                      src={Twitter}
                      alt=""
                      className="w-40r h-auto aspect-40/34 "
                    />
                  </Link>
                </li>
                <li>
                  <Link href={""}>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 40 34"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      className="w-40r h-35r "
                    >
                      <g
                        id="海外一期"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="切图颜色"
                          transform="translate(-378.000000, -241.000000)"
                        >
                          <g
                            id="in"
                            transform="translate(378.000000, 241.000000)"
                          >
                            <path
                              className="blue-hover"
                              d="M17,0 L23,0 C32.3888407,-1.72470207e-15 40,7.61115925 40,17 C40,26.3888407 32.3888407,34 23,34 L17,34 C7.61115925,34 1.14980138e-15,26.3888407 0,17 C-1.14980138e-15,7.61115925 7.61115925,1.72470207e-15 17,0 Z"
                              id="矩形备份-7"
                              fill="#BDBFC2"
                            ></path>
                            <g
                              className="white-hover"
                              id="编组-64"
                              transform="translate(12.000000, 9.000000)"
                              fill="#242933"
                            >
                              <path
                                d="M17.4899531,10.2483587 L17.4899531,16.7161263 L13.7435354,16.7161263 L13.7435354,10.6812455 C13.7435354,9.88404632 13.5896979,9.25966989 13.2822276,8.80838905 C12.9746436,8.35701726 12.4944188,8.13108126 11.8414394,8.13062653 C11.3633518,8.13062653 10.9630697,8.26165895 10.6404794,8.52347368 C10.3178209,8.78528842 10.0769468,9.10985684 9.91760697,9.49706526 C9.83393539,9.72495663 9.79219055,10.0324724 9.79219055,10.4196808 L9.79219055,16.7167175 L6.04568192,16.7167175 C6.06077918,13.6880109 6.0682596,11.232432 6.0682596,9.34979874 C6.0682596,7.46727916 6.06432613,6.34376084 6.05661834,5.97944842 L6.04486339,5.43278653 L9.79148571,5.43278653 L9.79148571,7.07247663 L9.76883982,7.07247663 C9.92090382,6.82957895 10.0766739,6.61705768 10.2360137,6.43486737 C10.3953535,6.25263158 10.6098301,6.05545768 10.87958,5.84309558 C11.1492162,5.63084716 11.4792642,5.46561853 11.8698604,5.34761432 C12.2604794,5.22945095 12.6950487,5.17067621 13.173591,5.17121813 C14.4717282,5.17121813 15.5155767,5.60188042 16.305068,6.46328842 C17.0944457,7.32474189 17.4892482,8.58661389 17.4892482,10.2491545 L17.4899531,10.2483587 Z"
                                id="路径"
                              ></path>
                              <path
                                d="M4.21288782,1.94718316 C4.22061834,2.50148463 4.02903771,2.96449768 3.63789582,3.33617684 C3.24675392,3.70787874 2.73251476,3.89393432 2.09508739,3.89438905 L2.07248697,3.89438905 C1.4501796,3.89438905 0.949082342,3.70831074 0.569126973,3.33617684 C0.189148868,2.96404295 -0.000521868966,2.50102989 -2.4158453e-13,1.94718316 C-2.4158453e-13,1.38562863 0.195492447,0.920569263 0.586611605,0.552346105 C0.977685289,0.184100211 1.48828655,0 2.11843813,0 C2.74858971,0 3.25332487,0.184100211 3.63273455,0.552346105 C4.01216697,0.920569263 4.20579392,1.38562863 4.21356992,1.94718316 L4.21288782,1.94718316 Z"
                                id="路径"
                              ></path>
                              <polygon
                                id="路径"
                                points="0.216455815 16.7160126 3.97378718 16.7160126 3.97378718 5.43205895 0.216455815 5.43205895"
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-1440r mx-auto py-24r flex justify-between items-center border-t border-charcoal-gray ">
        <div className="flex items-center gap-8r text-12r text-cadet-grey font-A2">
          <span>© 2026 vivo Mobile India Pvt Ltd. All rights reserved.</span>
          <span>|</span>
          <a href="/cookie-policy">Cookie Policy</a>
          <span>|</span>
          <a href="/warranty-terms">Warranty Terms</a>
        </div>
        <div>
          <Link
            href={""}
            className="flex items-center gap-8r text-12r text-cadet-grey font-A2"
          >
            <span>India | Select country/region</span>
            <i className="text-28r text-cadet-grey font-A4 not-italic ">
              &#xD023;
            </i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
