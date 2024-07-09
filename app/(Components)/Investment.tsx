import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function Investment() {
  return (
    <>
      <section className="bg-navy text-grey px-8 md:px-0" id="investment">
        <div className="container mx-auto py-20 flex flex-col gap-4 items-center justify-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-3xl underline font-bold mb-5">Investment</h1>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="flex flex-row gap-2 text-center"
          >
            <p>
              As residential financing experts, we understand the intricacies
              involved in property return on investment, market analytics, and
              how that can impact the ultimate success of an investment. We have
              access to more lenders who specialize in this area of lending than
              nearly any other lender in the county. Doing business with Maddox
              Forbes guarantees you not only have access competitive pricing,
              but it also provides you with a massive number of investment
              options to suit your particular financial goals and build your
              investment portfolio.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.4}>
            <Image
              src={"/images/investment2.jpg"}
              width={500}
              height={500}
              alt="investment"
            />
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.8}
            class="mt-20 items-center flex flex-col md:flex-row justify-between text-center text-lg"
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src={"/images/Investment Photo 1.jpg"}
                width={300}
                height={300}
                alt="investment"
              />
            </div>
            <div className=" mt-5 md:mt-0 flex flex-col gap-2 justify-center text-center font-[felix]">
              <p className="text-2xl font-[felix]">
                Maddox Forbes is your
                <span className="font-bold font-[felix]">
                  {" "}
                  long-term partner
                </span>{" "}
                in growing and diversifying your investment portfolio.
              </p>
              <p className="text-2xl font-[felix]">
                Explore ways to earn more with diversified loan products that
                suit a larger pool of buyers.
              </p>
            </div>
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
