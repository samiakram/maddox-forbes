import SlidingInComponent from "./SlidingIn";

export default function DesignSpotlight() {
  return (
    <>
      <section className="bg-grey text-navy px-4 md:px-0">
        <div className="container mx-auto py-20 flex flex-col items-center justify-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-2xl underline font-bold mb-5">
              Neighborhood/ Build Design Spotlight
            </h1>
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class="w-full">
            <div className="flex flex-row-reverse w-full">
              <div className="text-5xl w-full flex  items-center justify-center font-[cali] text-center font-bold">
                <p className="md:w-2/4">Fall in love with Summit Farms!</p>
              </div>
              <div className="w-full">Photos</div>
            </div>
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
