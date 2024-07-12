import InquiryForm from "./InquiryFormLink";
import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function Residential() {
  return (
    <>
      <section className="bg-offWhite text-navy px-8 md:px-0" id="residential">
        <div className="container mx-auto py-20 flex flex-col gap-4 items-center justify-center ">
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
                width={700}
                height={700}
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
              All gave some and some gave all, therefore, our veterans and
              active service members deserve the most competitive affordable
              loans on the market...
            </p>
            <p>
              With this information, it is our goal to get veterans in homes
              while putting down as little as possible.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={1}>
            <Image
              src={"/images/memorial day flags.jpg"}
              width={700}
              height={700}
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
                width={600}
                height={600}
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
          <SlidingInComponent delay={0.4} class="w-full">
            <h1 className="font-[cali] text-3xl w-full text-center mt-10">
              Before vs. After
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-around mt-5 gap-2 overflow-clip">
              <div className="w-full">
                {" "}
                <Image
                  src={"/images/before.jpg"}
                  alt="Before"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full">
                {" "}
                <Image
                  src={"/images/after.jpg"}
                  alt="After"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.8}
            class="flex flex-col gap-4 items-center justify-center w-full mt-5"
          >
            <InquiryForm loan={false} />
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
