"use client";

import React from "react";
import Nav from "./nav";

import Image from "next/image";
import SlidingInComponent from "./SlidingIn";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="">
      <section
        id="hero"
        className="pt-6 "
        style={{
          // backgroundImage:
          //   "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/images/bgImage.jpg')",
          backgroundImage: "url('/images/bgImage.jpg')",
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
          <div className="absolute w-screen  flex items-center justify-between bottom-0">
            <Image
              src={"/images/mf logo.png"}
              width={300}
              height={300}
              alt="Maddox Forbes Logo"
              className="object-contain"
            />
            <div className="bg-white px-2 py-1">Apply Now</div>
            <Image
              src={"/images/bf logo.png"}
              width={300}
              height={300}
              alt="BF Logo"
              className="object-contain "
            />
          </div>
        </div>
      </section>
      <section
        className="bg-navy py-5 flex items-center justify-center text-offWhite px-8 md:px-0"
        id="about"
      >
        <div className="container mx-auto py-20 flex flex-col items-center justify-center">
          <SlidingInComponent delay={0} class="mb-10">
            <h1 className="text-2xl tracking-wider ">About</h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="">
            <p className="text-xl text-center">
              Welcome to Maddox Forbes your local Loan and investment financing
              experts
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="w-3/4 mt-4">
            <p className="text-xl text-center">
              We pride ourselves in providing contemporary loan solutions for
              residential, investment, and commercial buyers by accessing the
              most comprehensive and competitive wholesale investors in the
              mortgage industry.
            </p>
          </SlidingInComponent>
          <div className="flex gap-4 my-10 flex-col md:w-3/4">
            <SlidingInComponent
              delay={0.6}
              class="flex flex-col md:flex-row gap-4 md:gap-2  items-start justify-center"
            >
              <div className="w-full h-full flex flex-col items-center justify-center ">
                <h3 className="tracking-wide italic text-lg text-center w-full mb-2 font-[cali]">
                  Purchasing Power
                </h3>
                <h5 className="text-4xl text-center md:text-center font-[cali]">
                  SET YOURSELF UP FOR SUCCESS & SHOP WITH CONFIDENCE
                </h5>
              </div>
              <div className="w-full text-lg flex flex-col gap-2 items-center text-center">
                <p>
                  Whether you are looking to buy your first home or expand your
                  real estate portfolio, our experts have decades of experience
                  in tailoring the loan experience to each individual buyer.
                  Please let us know if you would like a mortgage concierge to
                  reach out directly to begin the loan process or simply answer
                  your questions.
                </p>
              </div>
            </SlidingInComponent>
            <SlidingInComponent
              delay={0.8}
              class="flex flex-col gap-4 items-center justify-center w-full mt-5"
            >
              <h3 className="text-xl">Inquiry Request Form</h3>
              <button className="">
                <Image
                  src={"/images/Box Picture Link.jpg"}
                  width={120}
                  height={50}
                  alt="Box Picture Link"
                />
              </button>
            </SlidingInComponent>
          </div>
        </div>
      </section>

      <section className="bg-grey text-navy px-8 md:px-0">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center py-20 ">
          <SlidingInComponent delay={0}>
            <h1 className="tracking-wider text-2xl md:text-2xl ">
              What we stand for
            </h1>
          </SlidingInComponent>
          <div className="flex flex-col gap-6 md:w-3/4 w-full  justify-center items-start md:items-center">
            <SlidingInComponent
              delay={0.4}
              class={"flex items-start md:items-center justify-center"}
            >
              <p className="text-left md:text-center  text-lg ">
                Maddox forbes is a boutique mortgage brokerage powered by
                Barrett Financial Group. Excellence is our standard, surpassing
                it is our mission. Our brokers and advisors are passionate about
                their craft and deeply committed to exceeding every buyer&apos;s
                expectation.
              </p>
            </SlidingInComponent>
          </div>
        </div>
      </section>
      <section className="bg-navy text-blue-300 px-8 md:px-0">
        <div className="container mx-auto w-full items-center justify-center flex flex-row gap-8 py-20 ">
          {/* Large Screen Layout */}
          <div className="w-max overflow-hidden hidden relative md:flex items-center justify-center ">
            <SlidingInComponent
              delay={0.4}
              class="flex items-center justify-center overflow-clip  order-2 md:order-none"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                // src={"/images/TFK Executive Spotlight Photo.jpg"}
                src={""}
                width={300}
                height={300}
                className=""
              />
            </SlidingInComponent>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/2 ">
            <SlidingInComponent delay={0}>
              <h3 className="text-2xl text-center">Derek Michael Aron</h3>
              <h3 className="text-lg text-center">Senior Mortgage Advisor </h3>
            </SlidingInComponent>
            {/* Mobile Layout Image */}
            <SlidingInComponent
              delay={0.2}
              class="cover rounded-full overflow-clip w-[200px] h-[200px] flex items-center justify-center md:hidden md:order-none mt-10"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={""}
                // src={"/images/TFK Executive Spotlight Photo.jpg"}
                width={200}
                height={200}
                className="cover "
              />
            </SlidingInComponent>
            <SlidingInComponent delay={0.2} class="md:w-3/4">
              <p className="mt-10 text-left">
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
      <section className="bg-navy text-blue-300 px-8 md:px-0">
        <div className="container mx-auto w-full items-center justify-center flex flex-row-reverse gap-8 py-20 ">
          {/* Large Screen Layout */}
          <div className="w-max overflow-hidden hidden relative md:flex items-center justify-center ">
            <SlidingInComponent
              delay={0.4}
              class="flex items-center justify-center overflow-clip  order-2 md:order-none"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={"/images/TFK Executive Spotlight Photo.jpg"}
                width={300}
                height={300}
                className=""
              />
            </SlidingInComponent>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/2">
            <SlidingInComponent delay={0}>
              <h3 className="text-2xl text-center">Taylor Forbes Kaiser</h3>
              <h3 className="text-lg text-center">
                Director of Business Development
              </h3>
            </SlidingInComponent>
            {/* Mobile Layout Image */}
            <SlidingInComponent
              delay={0.2}
              class="cover rounded-full overflow-clip w-[200px] h-[200px] flex items-center justify-center md:hidden md:order-none mt-10"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                // src={""}
                src={"/images/TFK Executive Spotlight Photo.jpg"}
                width={200}
                height={200}
                className="cover "
              />
            </SlidingInComponent>
            <SlidingInComponent delay={0.2} class="md:w-3/4">
              <p className="mt-10 text-justify md:text-left">
                Taylor is a born and bred Tarheel native. Originally from
                Greensboro, she attended North Carolina State University, and
                afterwards lived for several years in Wilmington then Boone.
                This comprehensive knowledge of all major markets in the state
                uniquely positions her as a local expert, with access to
                top-tier investors on the national level. Having an educational
                background in Business Management, pursuing finance was a
                natural next step. She worked on the Chicago Mercantile
                Exchange, before also working in the family business of
                construction and development. Taylor&apo;s why is her family and
                farm, which includes her three children, husband, and far too
                many animals. She is a momma bear for her kids, and one you want
                fighting in your financial corner. B4
              </p>
            </SlidingInComponent>
          </div>
        </div>
      </section>
      <section className="bg-grey text-navy px-6 md:px-0" id="loan-programs">
        <div className="container mx-auto py-20 flex flex-col gap-6 items-center justfiy-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-2xl uppercase">Our Loan Process</h1>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="md:w-3/4 w-full text-center text-lg"
          >
            <p>
              Not all lenders are created equally. At Maddox Forbes we practice
              attention to detail at every step to ensure a loan experience
              surpassed by none. Clear, consistent, and concise communication
              ensures our buyers, agents, and partners have a smooth and timely
              closing.
            </p>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.6}
            class="flex flex-col md:flex-row gap-4 md:gap-2 md:w-3/4 items-start justify-center"
          >
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <h5 className="text-4xl text-center ">
                Understanding the Application and Preapproval Process
              </h5>
            </div>
            <div className="w-full text-lg flex flex-col gap-2 text-center">
              <p>
                At Maddox Forbes Premier Lending, we believe in bringing the
                human touch back to the mortgage industry. We start every loan
                by having a comprehensive discussion around goals and finances,
                so that we better understand and are more equipped to fulfill
                each buyer&apos;s desired outcome.
              </p>
            </div>
          </SlidingInComponent>
          <ul className="w-3/4">
            <li>
              <SlidingInComponent delay={0}>
                <p></p>
              </SlidingInComponent>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  );
}
