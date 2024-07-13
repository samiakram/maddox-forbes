import Image from "next/image";
import SlidingInComponent from "./SlidingIn";
import Carousel from "./Carousel";
import InquiryForm from "./InquiryFormLink";

export default function BuilderOfMonth() {
  return (
    <section className="bg-grey text-lightBlue px-4 md:px-0">
      <div className="container mx-auto py-20 flex flex-col items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0">
          <div className="w-full flex flex-col items-center justify-start gap-5">
            <SlidingInComponent>
              <Image
                src={"/images/barn.png"}
                width={200}
                height={200}
                alt="Barn"
              />
            </SlidingInComponent>
            <div className="text-lg flex flex-col gap-2">
              <SlidingInComponent delay={0.2}>
                <p>
                  Andrew grew up in New York State on the south side of the St.
                  Lawrence River in a small Amish community, attending a 2 room
                  school (Plumbrook Parochial ) for 8 years before beginning
                  working in the construction trade at age 14. Hard work is no
                  stranger to Andrew as he also had to keep up his chores on the
                  family&apos;s 60-acre farm.{" "}
                </p>
              </SlidingInComponent>
              <SlidingInComponent delay={0.3}>
                <p>
                  Over the years Andrew has been involved in different projects
                  ranging from remodeling, custom homes kitchen cabinets, mini
                  barns and large commercial steel projects. Currently Barn
                  Country USA is focusing on the pole-barn/post frame industry
                  that is growing exponentially. He works with his oldest son
                  and youngest brother. Andrew and his beautiful Amish wife have
                  been married for 20 years and have 9 children together.
                </p>
              </SlidingInComponent>
              <SlidingInComponent delay={0.4}>
                <p>
                  Like Maddox Forbes they are a small family-owned operation and
                  seek to offer buyers a quality building at a fair price.
                </p>
              </SlidingInComponent>
            </div>
          </div>
          <div className="w-full flex items-center flex-col gap-5 md:gap-0">
            <SlidingInComponent delay={0.2}>
              <h2 className="text-3xl font-bold text-center font-[cali]">
                Maddox Fobes&apos; Choice for builder of the month:
              </h2>
              <p className="font-[amasis] my-2 italic text-center text-xl">
                Andrew Kauffman
              </p>
            </SlidingInComponent>
            <SlidingInComponent delay={0.4} class="">
              {/* <Image
                src={"/images/kaufman.jpg"}
                width={500}
                height={500}
                alt="Kaufman"
              /> */}
              <Carousel
                images={[
                  { url: "/images/kaufman.jpg" },
                  { url: "/images/kaufman3.jpg" },
                  { url: "/images/kaufman2.jpg" },
                ]}
              />
            </SlidingInComponent>
          </div>
        </div>
        <SlidingInComponent
          delay={0.8}
          class="flex flex-col gap-4 items-center justify-center w-full mt-5"
        >
          <InquiryForm loan={false} />
        </SlidingInComponent>
      </div>
    </section>
  );
}
