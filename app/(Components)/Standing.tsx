import DesignSvg from "./DesignSVG";
import SlidingInComponent from "./SlidingIn";

export default function Standing() {
  return (
    <>
      <section className="bg-grey text-navy px-8 md:px-0">
        <div className="container mx-auto flex flex-col items-center gap-6 text-center py-20 ">
          <SlidingInComponent delay={0}>
            <h1 className="tracking-wider text-2xl md:text-3xl ">
              What we stand for
            </h1>
            <DesignSvg />
          </SlidingInComponent>
          <div className="flex flex-col gap-6  w-full  justify-center items-start md:items-center">
            <SlidingInComponent
              delay={0.4}
              class={"flex items-start md:items-center justify-center"}
            >
              <p className="text-center  text-xl ">
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
    </>
  );
}
