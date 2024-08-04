import Image from "next/image";

export default function InquiryForm({ loan }: { loan: boolean }) {
  return (
    <>
      <h3 className="text-3xl">
        {loan ? "Loan Inquiry Form" : "Builder Inquiry Form"}
      </h3>
      <a href={loan ? "/loan-form" : "/builder-form"}>
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
