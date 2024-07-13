import ApplyNow from "./ApplyNow";
import Nav from "./Navbar";
import Image from "next/image";

export default function Landing() {
  return (
    <>
      <section
        id="hero"
        className="pt-6 "
        style={{
          // backgroundImage:
          //   "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url('/images/bgImage.jpg')",
          backgroundImage: "url('/images/bgImage.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Nav />
        <div className="hidden md:block md:absolute z-0 top-0 left-0 right-0 bottom-0">
          <div className="absolute w-screen px-3 flex items-center justify-between bottom-3">
            <Image
              src={"/images/mf logo.png"}
              width={300}
              height={300}
              alt="Maddox Forbes Logo"
              className="object-contain "
            />
            <ApplyNow classes="" color="primaryWhite" />
            <Image
              src={"/images/bf logo.png"}
              width={300}
              height={300}
              alt="BF Logo"
              className="object-contain  "
            />
          </div>
        </div>
      </section>
    </>
  );
}
