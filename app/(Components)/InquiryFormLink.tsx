import Image from "next/image";

export default function InquiryForm({ loan }: { loan: boolean }) {
  return (
    <>
      <h3 className="text-xl">
        {loan ? "Loan Inquiry Request Form" : "Builder Inquiry Request Form"}
      </h3>
      <a href={loan ? "#loan-form" : "#builder-form"}>
        <Image
          src={"/images/Box Picture Link.jpg"}
          width={120}
          height={50}
          alt="Box Picture Link"
        />
      </a>
    </>
  );
}
