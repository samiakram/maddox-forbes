import ApplyNow from "./ApplyNow";
import DesignSvg from "./DesignSVG";
import SlidingInComponent from "./SlidingIn";

export default function LoanProcess() {
  return (
    <>
      <section className="bg-grey text-navy px-4 md:px-0" id="loan-programs">
        <div className="container mx-auto py-20 flex flex-col gap-6 items-center justfiy-center">
          <SlidingInComponent delay={0}>
            <h1 className="text-4xl uppercase">Our Loan Process</h1>
            <DesignSvg />
          </SlidingInComponent>
          <SlidingInComponent delay={0.2} class=" w-full text-center text-3xl">
            <p className="">
              Not all lenders are created equally. At Maddox Forbes we practice
              attention to detail at every step to ensure a loan experience
              surpassed by none. Clear, consistent, and concise communication
              ensures our buyers, agents, and partners have a smooth and timely
              closing.
            </p>
          </SlidingInComponent>
          <SlidingInComponent
            delay={0.6}
            class="flex flex-col md:flex-row gap-4 md:gap-10  items-center justify-center my-5"
          >
            <div className="w-full h-full flex flex-col items-center justify-center ">
              <h5 className="text-5xl md:text-5xl text-left ">
                Understanding the Application & Preapproval Process
              </h5>
            </div>
            <div className="w-full italic text-3xl flex flex-col gap-2 text-center">
              <p>
                At Maddox Forbes Premier Lending, we believe in bringing the
                human touch back to the mortgage industry. We start every loan
                by having a comprehensive discussion around goals and finances,
                so that we better understand and are more equipped to fulfill
                each buyer&apos;s desired outcome.
              </p>
            </div>
          </SlidingInComponent>
          <ol className="  text-2xl flex flex-col gap-5">
            <li>
              <SlidingInComponent delay={0.8}>
                <span className="font-[felix] font-bold">
                  1- Preapproval process:{" "}
                </span>
                <span>
                  Our pre-approval process is among the most comprehensive in
                  the industry. We request every foreseeable piece of Supporting
                  documentation that the underwriter will Need up front to
                  ensure what is stated on the application matches what is
                  reflected on the buyer&apos;s financial statements. This
                  validation ensures the figures we are prequalifying with are
                  correct and the amount we qualify a buyer for is accurate.
                </span>
              </SlidingInComponent>
            </li>
            <li>
              <SlidingInComponent delay={1}>
                <span className="font-[felix] font-bold">
                  2- Going Under Contract:{" "}
                </span>
                <span>
                  Once you find a house you love and have your offer accepted,
                  you&apos;ll be under contract. We move with urgency to ensure
                  downtime is kept to a minimum. within 72 hours of receiving
                  your fully executed contract, you will receive your loan
                  estimate for review and acknowledgement. Once you acknowledge
                  the intent to proceed, your file will be moved into
                  underwriting. Typically, we will receive your conditional
                  approval within 48 business hours.
                </span>
              </SlidingInComponent>
            </li>
            <li>
              <SlidingInComponent delay={1.2}>
                <span className="font-[felix] font-bold">
                  3- Underwriting:{" "}
                </span>
                <span>
                  Once we receive a conditional approval, our team will work
                  with you to satisfy those conditions. When all conditions are
                  satisfied, underwriting will issue a clear to close.
                </span>
              </SlidingInComponent>
            </li>
            <li>
              <SlidingInComponent delay={1.4}>
                <span className="font-[felix] font-bold">
                  4- Clear to close!{" "}
                </span>
                <span>
                  Congratulations are in order because if you have reached this
                  step then you are ready to close on your purchase!
                </span>
              </SlidingInComponent>
            </li>
          </ol>
          <SlidingInComponent delay={1.6}>
            <ApplyNow />
          </SlidingInComponent>
        </div>
      </section>
    </>
  );
}
