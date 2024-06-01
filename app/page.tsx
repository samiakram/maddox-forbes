"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  let path = usePathname();

  if (path === "/") {
    path = "About";
  }

  const internal_links = [
    {
      name: "About",
      href: "/",
    },
    {
      name: "Loan Programs",
      href: "/loan-programs",
    },
    {
      name: "New Builds",
      href: "/new-builds",
    },
  ];

  const external_links = [
    {
      name: "Realtor Portal",
      href: "/realtor-portal",
    },
    {
      name: "Builder Portal",
      href: "/builder-portal",
    },
    {
      name: "Apply Now",
      href: "/apply-now",
    },
  ];

  return (
    <main className="container mx-auto p-4">
      <section id="nav" className="flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <Image
            src={"/images/mf logo.png"}
            alt="logo"
            width={300}
            height={300}
          />
          <Image
            src={"/images/bf logo.png"}
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        {/* <img
          src="/images/seperator.png"
          alt="seperator"
          className="w-full h-6"
        /> */}
        <div className="flex w-full justify-between items-center">
          <ul className="flex items-center divide-x divide-r-blue justify-between gap-2 ">
            {internal_links.map((link) => (
              <li className="flex items-center pl-2" key={link.href}>
                <Link
                  href={link.href}
                  className=" hover:text-off-white border-b-2 border-transparent hover:border-off-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex divide-x divide-r-blue items-center justify-between gap-2 ">
            {external_links.map((link) => (
              <li className="flex items-center pl-2" key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-off-white border-b-2 border-transparent hover:border-off-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <h1 className="w-full text-2xl ">{path}</h1>
      </section>
    </main>
  );
}
