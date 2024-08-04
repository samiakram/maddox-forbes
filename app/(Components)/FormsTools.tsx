import DesignSvg from "./DesignSVG";
import SlidingInComponent from "./SlidingIn";

export default function FormsTools() {
  const links = [
    {
      name: "Credit Report Authorization ",
      link: "",
    },
    {
      name: "Builder Contact Form ",
      link: "builder-form",
    },
    {
      name: "National Do not Call Registry ",
      link: "",
    },
    {
      name: "Loan Contact Form",
      link: "/loan-form",
    },
    {
      name: "Construction Draws ",
      link: "",
    },
    {
      name: "Loan Disclosures ",
      link: "",
    },
    {
      name: "Inquiry Request Form",
      link: "",
    },
    {
      name: "Mortgage Calculator",
      link: "",
    },
    {
      name: "Homeowner's Insurance Quote ",
      link: "",
    },
    {
      name: "Home Valuation Tool ",
      link: "",
    },
  ];
  return (
    <section
      className="bg-offWhite text-navy px-8 md:px-0"
      style={{
        backgroundImage: "url('/images/form-tools-bg.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center py-10 container mx-auto">
        <SlidingInComponent>
          <h1 className="text-4xl font-bold text-center">Forms & Tools</h1>
          <DesignSvg />
        </SlidingInComponent>
        <ul className="grid  w-3/4 list-inside grid-cols-2 gap-40 list-disc place-items-stretch mt-20 text-xl gap-y-2">
          {links.map((link, idx) => {
            return (
              <SlidingInComponent key={idx} delay={0.1 * idx} class="">
                <a href={link.link}>
                  <li className="">{link.name}</li>
                </a>
              </SlidingInComponent>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
