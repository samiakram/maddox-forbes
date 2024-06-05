"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Slide from "./slide";

export default function Home() {
  let path = usePathname();

  if (path === "/") {
    path = "About";
  }

  const internal_links = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Loan Programs",
      href: "/loan-programs",
    },
    {
      name: "New Builds",
      href: "/new-builds",
    },
  ];

  const external_links = [
    {
      name: "Realtor Portal",
      href: "/realtor-portal",
    },
    {
      name: "Builder Portal",
      href: "/builder-portal",
    },
    {
      name: "Apply Now",
      href: "/apply-now",
    },
  ];

  return (
    <main className="bg-[rgba(0,0,0,0.8)] w-full h-screen pt-36 flex items-center justify-center">
      <section className="container md:p-0 p-5 flex flex-col gap-4 mx-auto text-off-white">
        <Slide>
          <h1 className="text-3xl font-bold w-full">About</h1>
        </Slide>
        <div>
          <Slide delay={0.2}>
            <p className="text-xl">
              Welcome to Maddox Forbes your local Loan and investment financing
              experts.
            </p>
          </Slide>
          <Slide delay={0.4}>
            <p className="text-lg">
              We pride ourselves in providing contemporary loan solutions for
              residential, investment, and commercial buyers by accessing the
              most comprehensive and competitive wholesale investors ni the
              mortgage industry.
            </p>
          </Slide>
        </div>
        <Slide
          delay={0.6}
          classNmae="flex flex-col md:flex-row justify-center items-center  gap-4 mt-4 "
        >
          <div className="relative p-4 w-full h-28 flex flex-col justify-center bg-off-white  cursor-pointer text-r-blue  shadow-xl group ">
            <h3 className="italic  mb-2 transition-all duration-300 absolute top-3">
              Purchasing Power
              <span className="ease absolute left-0 -bottom-0.5 h-0 w-0 border-t-2 border-r-blue transition-all duration-1000 group-hover:w-full"></span>
            </h3>

            <p className="font-bold text-xl group-hover:text-2xl pt-8 transition-all duration-300 relative">
              Set yourself up for success & shop with confidence
            </p>
          </div>
          <div className="text-lg">
            Whether you are looking to buy your first home or expand your real
            estate portfolio, our experts have decades of experience in
            tailoring the loan experience to each individual buyer. Please let
            us know fi you would like amortgage concierge to reach out directly
            to begin the loan process or simply answer your questions.
          </div>
        </Slide>
      </section>
    </main>
  );
}
