"use client";

import React from "react";
import Nav from "./nav";

import Image from "next/image";
import SlidingInComponent from "./SlidingIn";
import { internalLinks } from "./data";

export default function Home() {
  return (
    <main className="">
      <section
        id="hero"
        className="pt-6 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/bgImage.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Nav />
        <div className="hidden md:block md:absolute z-0 top-0 left-0 right-0 bottom-0">
          <Image
            src={"/images/mf logo.png"}
            width={300}
            height={300}
            alt="Maddox Forbes Logo"
            className="object-contain absolute bottom-0"
          />
          <Image
            src={"/images/bf logo.png"}
            width={300}
            height={300}
            alt="BF Logo"
            className="object-contain absolute bottom-0 right-0"
          />
        </div>
        <div className="container relative z-0 mx-auto flex flex-col gap-10 w-3/4 items-center justify-center mt-40 text-primaryWhite">
          <SlidingInComponent delay={0}>
            <h3 className="text-center text-base md:text-lg tracking-[5px]">
              Welcome to Maddox Forbes.
            </h3>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2}>
            <p className="text-2xl md:text-3xl text-center">
              Your local loan and investment financing experts. We pride
              ourselves in providing contemporary loan solutions for
              residential, investment, and commercial buyers by accessing the
              most comprehensive and competitive wholesale investors in the
              mortgage industry.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.4}>
            <button className="px-4 py-2 bg-navy hover:bg-primaryWhite text-primaryWhite hover:text-navy hover:border-navy transition-all duration-300 ease-in-out">
              CTA Button
            </button>
          </SlidingInComponent>
        </div>
      </section>
      <section className="bg-navy px-4 md:px-0">
        <div className="container  mx-auto flex items-center flex-col gap-6 text-primaryWhite py-20">
          <SlidingInComponent delay={0}>
            <h3 className="uppercase  tracking-[5px] text-base md:text-lg">
              Purchasing Power
            </h3>
          </SlidingInComponent>
          <div className="flex  w-3/4 md:flex-row flex-col gap-4 justify-center items-center ">
            <SlidingInComponent delay={0.2}>
              <div className="md:text-4xl grow-0 text-2xl tracking-widest text-left w-full font-[felix] ">
                Set yourself up for success & shop with confidence
              </div>
            </SlidingInComponent>
            <div className="flex   flex-col gap-6">
              <SlidingInComponent delay={0.4} class="">
                <div className="w-full text-base text-[amasis]">
                  Whether you are looking to buy your first home or expand your
                  real estate portfolio, our experts have decades of experience
                  in tailoring the loan experience to each individual buyer.
                  Please let us know if you would like a mortgage concierge to
                  reach out directly to begin the loan process or simply answer
                  your questions.
                </div>
              </SlidingInComponent>
              <SlidingInComponent delay={0.6}>
                <button className="px-4 py-2 bg-primaryWhite hover:bg-navy text-navy hover:text-primaryWhite border-transparent border hover:border-primaryWhite transition-all duration-300 ease-in-out ">
                  CTA Button
                </button>
              </SlidingInComponent>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-300 text-navy px-4 md:px-0">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center py-20">
          <SlidingInComponent delay={0}>
            <h3 className="uppercase tracking-[5px] text-base md:text-lg">
              What we stand for
            </h3>
          </SlidingInComponent>
          <div className="flex flex-col gap-6 w-3/4  justify-center items-start md:items-center">
            <SlidingInComponent
              delay={0.4}
              class={"flex items-start md:items-center justify-center"}
            >
              <div className="text-base text-left md:text-center   text-[amasis]">
                Whether you are looking to buy your first home or expand your
                real estate portfolio, our experts have decades of experience in
                tailoring the loan experience to each individual buyer. Please
                let us know if you would like a mortgage concierge to reach out
                directly to begin the loan process or simply answer your
                questions.
              </div>
            </SlidingInComponent>
            <SlidingInComponent delay={0.6} class="">
              <button className="px-4 py-2 border border-transparent text-navy bg-primaryWhite hover:bg-blue-300 hover:border-primaryWhite hover:text-primaryWhite  transition-all duration-300 ease-in-out ">
                CTA Button
              </button>
            </SlidingInComponent>
          </div>
        </div>
      </section>
      <section className="bg-navy text-blue-300 px-4 md:px-0">
        <div className="container mx-auto w-full  items-center justify-center flex flex-row gap-2 py-20">
          <div className="w-1/2 overflow-hidden hidden relative md:flex items-center justify-center ">
            <SlidingInComponent
              delay={0.2}
              class="cover  order-2 md:order-none rounded-full"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={""}
                width={300}
                height={300}
                className="cover rounded-full"
              />
            </SlidingInComponent>
          </div>
          <div className="flex flex-col items-center justify-center w-3/4">
            <SlidingInComponent delay={0}>
              <h3 className="text-2xl text-center">DEREK MICHAEL ARON</h3>
              <h3 className="text-xl text-center">SENIOR MORTGAGE ADVISOR</h3>
            </SlidingInComponent>
            <SlidingInComponent
              delay={0.2}
              class="cover md:hidden md:order-none mt-10"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={""}
                width={200}
                height={200}
                className="cover "
              />
            </SlidingInComponent>
            <SlidingInComponent delay={0.2}>
              <p className="mt-10">
                Born in Philadelphia and raised in the beautiful Delaware
                Valley, Derek spent a lot of his childhood traveling up and down
                the east coast playing competitive soccer. He has passed along
                this passion for soccer to his son. Derek. Along with his wife,
                they enjoy spending weekends traveling to matches all over the
                state and he has never missed a game! His dedication to your
                loan is only surpassed by his dedication to his family.
              </p>
            </SlidingInComponent>
          </div>
        </div>
      </section>
      <section className="bg-navy  text-blue-300 px-4 md:px-0">
        <div className="container mx-auto w-full  items-center justify-center flex flex-row-reverse gap-2 py-20">
          <div className="w-1/2 overflow-hidden hidden relative md:flex items-center justify-center ">
            <SlidingInComponent
              delay={0.2}
              class="cover  order-2 md:order-none rounded-full"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={"/images/TFK Executive Spotlight Photo.jpg"}
                width={300}
                height={300}
                className="cover rounded-full"
              />
            </SlidingInComponent>
          </div>
          <div className="flex flex-col items-center justify-center w-3/4">
            <SlidingInComponent delay={0}>
              <h3 className="text-2xl text-center">Taylor Forbes Kiser</h3>
              <h3 className="text-xl text-center">
                Director of Business Development
              </h3>
            </SlidingInComponent>
            <SlidingInComponent
              delay={0.2}
              class="cover md:hidden md:order-none mt-10"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={"/images/TFK Executive Spotlight Photo.jpg"}
                width={200}
                height={200}
                className="cover "
              />
            </SlidingInComponent>
            <SlidingInComponent delay={0.2}>
              <p className="mt-10">
                Taylor is a born and bred Tarheel native. Originally from
                Greensboro, she attended North Carolina State University, and
                afterwards lived for several years in Wilmington then Boone.
                This comprehensive knowledge of all major markets in the state
                uniquely positions her as a local expert, with access to
                top-tier investors on the national level. Having an educational
                background in Business Management, pursuing finance was a
                natural next step. She worked on the Chicago Mercantile
                Exchange, before also working in the family business of
                construction and development. Taylor's why is her family and
                farm, which includes her three children, husband, and far too
                many animals. She is a momma bear for her kids, and one you want
                fighting in your financial corner.
              </p>
            </SlidingInComponent>
          </div>
        </div>
      </section>
      <footer className="w-full bg-primaryWhite text-navy py-20">
        <div className="container mx-auto flex flex-col gap-10 md:flex-row md:gap-2 items-start justify-center ">
          <div className="w-full text-center flex flex-col order-2 md:order-none gap-4">
            <h5 className="text-xl">Quick Links</h5>
            <ul className="gap-3 flex flex-col items-center relative ">
              {internalLinks.map((link) => {
                return (
                  <>
                    <a href="">
                      <li className="relative group text-sm text-center ">
                        <span className="text-base">{link.text}</span>
                        <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                      </li>
                    </a>
                  </>
                );
              })}
            </ul>
          </div>
          <h3 className="text-3xl order-1 md:order-none text-center tracking-wide w-full">
            Maddox Forbes
          </h3>
          <div className="w-full md:order-none order-10 text-center"></div>
        </div>
        {/* <div className="w-full text-sm text-center mt-10">
          Designed by{" "}
          <a
            href="https://sunaam.web.app"
            target="_blank"
            className="underline"
          >
            M Sunaam
          </a>
        </div> */}
      </footer>
    </main>
  );
}
