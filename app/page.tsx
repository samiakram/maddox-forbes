"use client";

import React from "react";
import Nav from "./nav";

import Image from "next/image";
import SlidingInComponent from "./SlidingIn";

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
        <div className="container mx-auto flex flex-col gap-6 text-primaryWhite py-20">
          <SlidingInComponent delay={0}>
            <h3 className="uppercase tracking-[5px] text-base md:text-lg">
              Purchasing Power
            </h3>
          </SlidingInComponent>
          <div className="flex md:flex-row flex-col gap-4 justify-center items-center ">
            <SlidingInComponent delay={0.2}>
              <div className="md:text-4xl text-2xl tracking-widest text-left w-full font-[felix] ">
                Set yourself up for success & shop with confidence
              </div>
            </SlidingInComponent>
            <div className="flex flex-col gap-6">
              <SlidingInComponent delay={0.4}>
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
    </main>
  );
}
