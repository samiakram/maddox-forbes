import SlidingInComponent from "./SlidingIn";

export default function BuilderByArea() {
  const builders = [
    {
      area: "Pinehurst/southern pines",
      builder: "Camina Design and Construction",
      link: "",
      subtitle:
        "Call lily Camina today to have her make all your interior design dreams come true. Her contemporary yet timeless designs are the epitome of class and sophistication.",
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
  ];
  return (
    <>
      <section className="bg-offWhite text-navy px-8 md:px-0 ">
        <div className="container mx-auto flex flex-col items-center justify-center py-20">
          <SlidingInComponent>
            <h3 className="font-[felix] font-bold text-xl">
              Builders by Area{" "}
            </h3>
          </SlidingInComponent>
          <ul className="list-disc font-felix md:w-3/4 mt-5">
            {builders.map((builder, idx) => {
              return (
                <SlidingInComponent key={idx}>
                  <li key={idx} className="">
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
