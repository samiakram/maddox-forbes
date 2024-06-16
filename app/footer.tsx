import { internalLinks } from "./data";

export default function Footer() {
  return (
    <footer className="w-full bg-primaryWhite text-navy py-20">
      <div className="container mx-auto flex flex-col gap-10 md:flex-row md:gap-2 items-start justify-center ">
        <div className="w-full text-center flex flex-col order-2 md:order-none gap-4">
          <h5 className="text-xl">Quick Links</h5>
          <ul className="gap-3 flex flex-col items-center relative ">
            {internalLinks.map((link) => {
              return (
                <>
                  <a href={link.url}>
                    <li className="relative group text-sm text-center ">
                      <span className="text-base">{link.text}</span>
                      <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                    </li>
                  </a>
                </>
              );
            })}
          </ul>
        </div>
        <h3 className="text-3xl order-1 md:order-none text-center tracking-wide w-full">
          Maddox Forbes
        </h3>
        <div className="w-full md:order-none order-10 text-center"></div>
      </div>
      {/* <div className="w-full text-sm text-center mt-10">
    Designed by{" "}
    <a
      href="https://sunaam.web.app"
      target="_blank"
      className="underline"
    >
      M Sunaam
    </a>
  </div> */}
    </footer>
  );
}
