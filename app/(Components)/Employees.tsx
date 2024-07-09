import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function Employees() {
  return (
    <>
      <section className="bg-navy text-lightBlue px-8 md:px-0">
        <div className="container mx-auto w-full items-center justify-between flex flex-row  py-20 ">
          {/* Large Screen Layout */}
          <div className="w-full  overflow-hidden hidden relative md:flex items-center justify-start ">
            <SlidingInComponent
              delay={0.4}
              class="flex items-center justify-center overflow-clip order-2 md:order-none"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={"/images/TFK Executive Spotlight Photo.jpg"}
                // src={""}
                width={300}
                height={300}
                className=""
              />
            </SlidingInComponent>
          </div>
          <div className="flex  w-full flex-col items-center justify-center">
            <SlidingInComponent delay={0}>
              <h3 className="text-3xl text-center">Derek Michael Aron</h3>
              <h3 className="text-xl text-center">Senior Mortgage Advisor </h3>
            </SlidingInComponent>
            {/* Mobile Layout Image */}
            <SlidingInComponent
              delay={0.2}
              class="cover overflow-clip w-[200px] h-[200px] flex items-center justify-start md:hidden md:order-none mt-10"
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
            <SlidingInComponent delay={0.2} class="">
              <p className="mt-10 text-base text-left">
                Born in Philadelphia and raised in the beautiful Delaware
                Valley, Derek spent a lot of his childhood traveling up and down
                the east coast playing competitive soccer. He has passed along
                this passion for soccer to his son. Derek. Along with his wife,
                they enjoy spending weekends traveling to matches all over the
                state and he has never missed a game! His dedication to his work
                is only surpassed by his dedication to his family.
              </p>
            </SlidingInComponent>
          </div>
        </div>
      </section>
      <section className="bg-navy text-lightBlue px-8 md:px-0">
        <div className="container mx-auto w-full items-center justify-between flex flex-row-reverse  py-20 ">
          {/* Large Screen Layout */}
          <div className="w-full  overflow-hidden hidden relative md:flex items-center justify-center ">
            <SlidingInComponent
              delay={0.4}
              class="flex items-center justify-center overflow-clip order-2 md:order-none"
            >
              <Image
                alt="TFK Executive Spotlight Photo"
                src={"/images/TFK Executive Spotlight Photo.jpg"}
                // src={""}
                width={300}
                height={300}
                className=""
              />
            </SlidingInComponent>
          </div>
          <div className="flex  w-full flex-col items-center justify-center">
            <SlidingInComponent delay={0}>
              <h3 className="text-3xl text-center">Derek Michael Aron</h3>
              <h3 className="text-xl text-center">Senior Mortgage Advisor </h3>
            </SlidingInComponent>
            {/* Mobile Layout Image */}
            <SlidingInComponent
              delay={0.2}
              class="cover overflow-clip w-[200px] h-[200px] flex items-center justify-center md:hidden md:order-none mt-10"
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
            <SlidingInComponent delay={0.2} class="">
              <p className="mt-10 text-base text-left">
                Born in Philadelphia and raised in the beautiful Delaware
                Valley, Derek spent a lot of his childhood traveling up and down
                the east coast playing competitive soccer. He has passed along
                this passion for soccer to his son. Derek. Along with his wife,
                they enjoy spending weekends traveling to matches all over the
                state and he has never missed a game! His dedication to his work
                is only surpassed by his dedication to his family.
              </p>
            </SlidingInComponent>
          </div>
        </div>
      </section>
    </>
  );
}
