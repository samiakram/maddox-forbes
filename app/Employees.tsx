import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function Employees() {
  return (
    <>
      <section className="bg-navy text-lightBlue px-8 md:px-0">
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
              class="cover  overflow-clip w-[200px] h-[200px] flex items-center justify-center md:hidden md:order-none mt-10"
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
      <section className="bg-navy text-lightBlue px-8 md:px-0">
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
            <SlidingInComponent delay={0.2} class="md:w-3/4">
              <p className="mt-10  md:text-left">
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
    </>
  );
}
