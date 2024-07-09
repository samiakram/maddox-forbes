import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function Residential() {
  return (
    <>
      <section className="bg-offWhite text-navy px-8 md:px-0" id="residential">
        <div className="container mx-auto py-20 flex flex-col gap-4 items-center justify-center md:w-3/4">
          <SlidingInComponent delay={0}>
            <h1 className="text-3xl underline font-bold mb-5">Residential</h1>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="flex flex-col md:flex-row gap-2"
          >
            <div className="w-full flex flex-col items-center justify-center">
              <Image
                src={"/images/Picture 1.jpg"}
                width={500}
                height={500}
                alt="Residential"
              />
              <div className="mt-5">Blueprint</div>
            </div>
            <div className="w-full flex items-center mt-10 justify-center">
              <div className="mb-16">
                <h1 className="italic text-3xl text-center font-[cali]">
                  Not sure whether to{" "}
                  <span className="underline">buy or build?</span>
                </h1>
                <p className="italic text-2xl text-center">
                  Our experts can help you review over all loan program options
                  you qualify for, so you can make an informed decision!
                </p>
              </div>
            </div>
          </SlidingInComponent>
          <SlidingInComponent delay={0.4}>
            <h1 className="text-2xl font-[felix] mt-5">
              Veterans&apos; affairs loans
            </h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.8} class="text-center text-lg">
            <p>
              All gave some and some gave all, therefore, our veterans deserve
              the most competitive affordable loans on the market. We have all
              manner of programs to meet any service member&apos;s needs. We
              also go the extra mile and request on your behalf your certificate
              of eligibility, so you don&apos;t have to!
            </p>
            <p>
              With this information, it is our goal to get veterans in homes
              while putting down as little as possible.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={1}>
            <Image
              src={"/images/memorial day flags.jpg"}
              width={500}
              height={500}
              alt="memorial day flags"
            />
          </SlidingInComponent>
          <SlidingInComponent delay={0.4}>
            <h1 className="text-2xl font-[felix] mt-5">
              Historic Renovation loans
            </h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.8} class="text-center text-lg">
            <p>Does the home you have your sights set on need some TLC?</p>
            <p>
              We have access to renovation loans created specifically for this
              reason!
            </p>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="flex flex-col md:flex-row gap-2"
          >
            <div className="w-full flex  items-center justify-center">
              <Image
                src={"/images/historic renovation.jpg"}
                width={500}
                height={500}
                alt="Residential"
              />
            </div>
            <div className="w-full flex items-center mt-10 justify-center">
              <div className="flex flex-col gap-2 mb-10">
                <h1 className="italic text-3xl text-center font-[felix]">
                  Customized Residential Loan Programs
                </h1>
                <p className="italic text-2xl text-center">
                  With access to more loan programs, we can present you with
                  options so you may select the exact loan product to meets your
                  unique needs.
                </p>
              </div>
            </div>
          </SlidingInComponent>
          <SlidingInComponent delay={0.4}>
            <h1 className="font-[cali] text-3xl w-full text-center mt-10">
              Before vs. After
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-center gap-2 overflow-clip">
              <Image
                src={"/images/before.jpg"}
                alt="Before"
                width={500}
                height={500}
              />
              <Image
                src={"/images/after.jpg"}
                alt="Before"
                width={520}
                height={520}
              />
            </div>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.8}
            class="flex flex-col gap-4 items-center justify-center w-full mt-5"
          >
            <h3 className="text-xl font-bold mt-4">Builder INQUIRY REQUEST</h3>
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
      </section>
    </>
  );
}
