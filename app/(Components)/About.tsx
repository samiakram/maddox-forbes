import InquiryForm from "./InquiryFormLink";
import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section
        className="bg-navy py-5 flex items-center justify-center text-offWhite px-4 md:px-0 "
        id="about"
      >
        <div className="container  mx-auto py-20 flex flex-col items-center justify-center">
          <SlidingInComponent delay={0} class="mb-10 ">
            <h1 className="text-3xl tracking-wider ">About</h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="">
            <p className="text-xl text-center">
              Welcome to Maddox Forbes your local Loan and investment financing
              experts
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="mt-4">
            <p className="text-xl text-center">
              We pride ourselves in providing contemporary loan solutions for
              residential, investment, and commercial buyers by accessing the
              most comprehensive and competitive wholesale investors in the
              mortgage industry.
            </p>
          </SlidingInComponent>
          <div className="flex gap-4 my-10 flex-col">
            <SlidingInComponent
              delay={0.6}
              class="flex flex-col  md:flex-row gap-4 md:gap-4  items-start justify-center"
            >
              <div className="w-full h-full  flex flex-col items-center justify-center ">
                <h3 className="tracking-wide md:ml-32 italic text-lg text-center md:text-left w-full mb-2 font-[cali]">
                  Purchasing Power
                </h3>
                <h5 className="text-5xl text-center md:text-center font-[cali]">
                  SET YOURSELF UP FOR SUCCESS & SHOP WITH CONFIDENCE
                </h5>
              </div>
              <div className="w-full text-lg mt-8 flex flex-col gap-2 items-center text-center">
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
              <InquiryForm loan={true} />
            </SlidingInComponent>
          </div>
        </div>
      </section>
    </>
  );
}
