import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-offWhite text-navy py-10 px-4 md:px-0 ">
      <div className="flex flex-col gap-5 py-10 container mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-center gap-2 md:gap-0 md:justify-between items-center">
          <Image
            src={"/images/mf logo.png"}
            width={350}
            height={350}
            alt="MF Logo"
            className=""
          />
          <h3 className=" mt-2 md:mt-0 text-center font-[felix] text-4xl">
            Contact us now! <br />
            “We make it happen.”
          </h3>
          <Image
            src={"/images/bf logo.png"}
            width={350}
            height={350}
            alt="BF Logo"
          />
        </div>
        {/* <div className="flex flex-col gap-1">
          {" "}
          <h1 className="font-[felix] text-center md:text-left font-bold text-2xl">
            Taylor Forbes Kiser
          </h1>
          <h4 className="font-[felix] text-center md:text-left font-bold">
            Mortgage Loan Originator | NMLS #2296421
          </h4>
        </div> */}
        <div className="flex mt-10 flex-col md:flex-row gap-5 items-center ">
          <div className="flex md:flex-row justify-between items-center">
            <Image
              src={"/images/TFK Headshot Black Dress.jpg"}
              width={300}
              height={300}
              alt={"TFK"}
            />
          </div>
          <div className="flex px-1 flex-col gap-1">
            <div className="flex flex-col mb-5 gap-1">
              {" "}
              <h1 className="font-[felix] text-center md:text-left font-bold text-3xl">
                Taylor Forbes Kiser
              </h1>
              <h4 className="font-[felix] text-xl text-center md:text-left font-bold">
                Mortgage Loan Originator | NMLS #2296421
              </h4>
            </div>
            <p className="font-[felix] font-bold text-sm">
              Barrett Financial Group, LLC | Corp NMLS #181106
            </p>
            <p className="font-[felix] font-bold text-sm">
              206 Raleigh St Suite 100, Fuquay Varina, North Carolina 27526
            </p>
            <p className="font-[felix] font-bold text-sm">
              (336) 912-0708 phone
            </p>
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
        </div>
        <div className="relative flex items-center justify-center w-full ">
          <img src="/images/footer.png" alt="Footer" className="w-full mt-5" />
        </div>
      </div>
    </footer>
  );
}
