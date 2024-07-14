import SlidingInComponent from "./SlidingIn";
import Image from "next/image";

export default function Commercial() {
  return (
    <>
      <section className="bg-navy text-grey px-4 md:px-0" id="commercial">
        <div className="container mx-auto py-20 flex flex-col gap-4 items-center justify-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-4xl underline font-bold mb-5">Commercial</h1>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.2}
            class="flex flex-row gap-2 text-3xl text-center"
          >
            <p>
              We have a saying in our Commercial Department, “we play with the
              big boys, and we act like it”. If you are serious about maximizing
              build efficiency while maintaining white glove service, then you
              have found the right lender. We provide solutions for our national
              and international clientele alike. Maddox Forbes helps savvy
              investors develop a wide variety of profitable ventures.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="mt-10">
            <Image
              src={"/images/Commercial Photo.jpg"}
              width={700}
              height={700}
              alt="commercial"
            />
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
