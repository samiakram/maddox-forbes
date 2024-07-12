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
      link: "",
    },
    {
      name: "National Do not Call Registry ",
      link: "",
    },
    {
      name: "Construction Drawls ",
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
      name: "Homeowner&apos;s Insurance Quote ",
      link: "",
    },
    {
      name: "Home Valuation Tool ",
      link: "",
    },
  ];
  return (
    <section className="bg-offWhite text-navy px-8 md:px-0">
      <div className="flex flex-col items-center justify-center py-20 container mx-auto">
        <SlidingInComponent>
          <h1 className="text-2xl font-bold text-center">Forms & Tools</h1>
          <DesignSvg />
        </SlidingInComponent>
        <ul className="grid grid-cols-2 list-disc place-items-stretch mt-10 w-full gap-y-2">
          {links.map((link, idx) => {
            return (
              <SlidingInComponent delay={0.1 * idx} class="">
                <li>{link.name}</li>
              </SlidingInComponent>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
