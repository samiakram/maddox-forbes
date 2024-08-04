import DesignSvg from "./DesignSVG";
import SlidingInComponent from "./SlidingIn";

export default function BuilderByArea() {
  const builders = [
    {
      area: "Pinehurst/southern pines",
      builder: "Camina Design and Construction",
      link: "",
      subtitle: "",
    },
    {
      area: "Wilmington",
      builder: "Dewitt Carolinas",
      link: "",
      subtitle: "",
    },
    {
      area: "Raleigh",
      builder: "Grayson Dare",
      link: "",
      subtitle: "Dewitt Carolinas",
    },
    {
      area: "Triad",
      builder: "Barn Country Builders",
      link: "",
      subtitle: "",
    },
    {
      area: "Greater Charlotte/concord/ Salisbury",
      builder: "Todd Thomas Contracting",
      link: "",
      subtitle: "Porter & Cress",
    },
    {
      area: "Mt. Airy",
      builder: "Todd Thomas Contracting",
      link: "",
      subtitle: "Porter & Cress",
    },
  ];
  return (
    <>
      <section className="bg-offWhite text-navy px-8 md:px-0 ">
        <div className="container mx-auto flex flex-col items-center justify-center py-20">
          <SlidingInComponent class="flex  flex-col items-center justify-center">
            <h3 className="font-[felix] text-center font-bold text-4xl mb-10">
              Builders by Area
              <div className="w-full">
                <DesignSvg />
              </div>
            </h3>
          </SlidingInComponent>
          <ul className="list-disc  place-content-between text-lg gap-y-5 font-felix grid grid-cols-2 gap-10 mt-5">
            {builders.map((builder, idx) => {
              return (
                <SlidingInComponent delay={0.2 * idx} key={idx}>
                  <li key={idx} className=" flex flex-col h-full ">
                    <h4 className="font-bold">{builder.area}</h4>
                    <ul className="list-disc ml-5">
                      <li>
                        {" "}
                        <p className="font-[felix]">{builder.builder}</p>
                      </li>
                      {builder.subtitle != "" && (
                        <li>
                          <p className="font-[felix]">{builder.subtitle}</p>
                        </li>
                      )}
                    </ul>
                  </li>
                </SlidingInComponent>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
