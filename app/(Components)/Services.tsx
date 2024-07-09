import SlidingInComponent from "./SlidingIn";

export default function Services() {
  return (
    <>
      <section className="bg-navy text-offWhite px-8 md:px-0">
        <div className="container mx-auto py-20 flex flex-col gap-4 items-center justify-center">
          <SlidingInComponent delay={0} class="mb-5">
            <h1 className="text-3xl tracking-wider ">Services</h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="">
            <p className="text-xl text-center italic ">
              With access to over 130 wholesale lenders, we are your one-stop
              shop for virtually any type of property lending need.
            </p>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2}>
            <ul className="flex text-lg flex-row w-full gap-6 items-center justify-center">
              <li>
                <a href="#residential" className="group relative flex gap-1">
                  Residential
                  <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
              <li>
                <a href="#investment" className="group relative flex gap-1">
                  Investment
                  <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                </a>
              </li>{" "}
              <li>
                <a href="#commercial" className="group relative flex gap-1">
                  Commercial
                  <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                </a>
              </li>
            </ul>
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
