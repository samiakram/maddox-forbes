import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-offWHite text-navy py-20">
      <div className="flex flex-col gap-5 py-10 container mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-center gap-2 md:gap-0 md:justify-between items-center">
          <Image
            src={"/images/mf logo.png"}
            width={250}
            height={250}
            alt="MF Logo"
          />
          <Image
            src={"/images/bf logo.png"}
            width={250}
            height={250}
            alt="BF Logo"
          />
        </div>
        <div className="flex flex-col gap-1">
          {" "}
          <h1 className="font-[felix] text-center md:text-left font-bold text-2xl">
            Taylor Forbes Kiser
          </h1>
          <h4 className="font-[felix] text-center md:text-left font-bold">
            Mortgage Loan Originator | NMLS #2296421
          </h4>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Image
            src={"/images/TFK Headshot Black Dress.jpg"}
            width={200}
            height={200}
            alt={"TFK"}
          />
          <h3 className="md:w-1/4 mt-2 md:mt-0 text-center font-[cali] text-5xl">
            Contact us now! “We make it happen.”
          </h3>
        </div>
        <div className="flex px-1 flex-col gap-1">
          <p className="font-[felix] font-bold text-sm">
            Barrett Financial Group, LLC | Corp NMLS #181106
          </p>
          <p className="font-[felix] font-bold text-sm">
            206 Raleigh St Suite 100, Fuquay Varina, North Carolina 27526
          </p>
          <p className="font-[felix] font-bold text-sm">(336) 912-0708 phone</p>
          <p className="font-[felix] font-bold text-sm underline">
            <a href="mailto:taylor@barrettfinancial.com">
              taylor@barrettfinancial.com
            </a>
          </p>
          <button className="font-bold uppercase px-4 py-1 bg-navy text-white w-max text-xl">
            <a href="https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2F181106.my1003app.com%2F2296421%2Fregister&data=05%7C02%7CTaylor%40BarrettFinancial.com%7Cf03c33eddd4a47878b8308dc7abce5db%7C12df965207d948a6a1940018887f4c47%7C0%7C0%7C638520199033325245%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C0%7C%7C%7C&sdata=JwdGVR64PpJwjhps%2BD4bqD2L4uhrV1zxSdq6%2BEMoHM0%3D&reserved=0">
              APPLY NOW
            </a>
          </button>
        </div>
        <div className="relative">
          <img src="/images/footer.png" alt="Footer" />
        </div>
      </div>
    </footer>
  );
}
