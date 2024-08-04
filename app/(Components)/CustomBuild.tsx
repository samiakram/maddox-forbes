import Image from "next/image";
import SlidingInComponent from "./SlidingIn";
import InquiryForm from "./InquiryFormLink";

export default function CustomBuild() {
  return (
    <>
      <section
        className="bg-navy text-lightBlue px-4 md:px-0"
        id="custom-build"
      >
        <div className="container mx-auto py-20 flex flex-col items-center justify-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-4xl underline font-bold mb-5">Custom Build</h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="text-3xl text-center">
            <p>
              Maddox Forbes has partnered with elite custom builders statewide.
              These thoroughly vetted builders range in expertise from
              stick-built homes to unique custom builds. To meet local demand,
              we also have builders in multiple areas who specialize in
              Bromoniums, large pole barns and majestic horse stables. Contact
              us today to plan your project, or to inquire about properties that
              are currently under construction.
            </p>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.4}
            class="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 mt-10"
          >
            <div className="text-6xl w-full flex mb-5 items-center justify-center text-center font-bold">
              <p className="leading-relaxed font-[felix]">
                Create the home of your dreams from scratch!
              </p>
            </div>
            <Image
              src={"/images/new build photo.jpg"}
              width={500}
              height={500}
              alt="new build photo"
              className="w-full md:mr-32"
            />
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.8}
            class="flex flex-col gap-4 items-center justify-center w-full mt-16"
          >
            <InquiryForm loan={false} />
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
