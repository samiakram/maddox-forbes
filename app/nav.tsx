"use client";

import { IoClose } from "react-icons/io5";
import { IconContext } from "react-icons";

import { GiHamburgerMenu } from "react-icons/gi";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function RenderLinks({
  links,
  path,
}: {
  links: { name: string; href: string }[];
  path: string;
}) {
  return (
    <ul className="flex  flex-col md:flex-row md:items-center justify-between gap-2 ">
      {links.map((link) => (
        <li
          className={`flex items-center pl-2 ${
            path === link.href ? "font-bold " : ""
          }`}
          key={link.href}
        >
          <Link
            href={link.href}
            className="relative group transition-all duration-300"
          >
            {link.name}
            <span className="ease absolute left-0 bottom-0 h-0 w-0 border-t-2 border-r-blue transition-all duration-500 group-hover:w-full"></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  let path = usePathname();

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

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!sideNavRef.current) return;
      if (isOpen && !sideNavRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="bg-[rgba(0,0,0,0.8)] w-screen h-screen fixed z-50"></div>
      )}
      <aside
        ref={sideNavRef}
        className="md:hidden flex-col flex h-screen w-52 z-50 fixed  top-0 bg-off-white  p-5 transition-all duration-300 ease-in"
        style={{
          left: isOpen ? "0" : "-100%",
        }}
      >
        <div className="w-full flex justify-end " onClick={() => {}}>
          <IconContext.Provider value={{ size: "1.5em" }}>
            <div
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <IoClose />
            </div>
          </IconContext.Provider>
        </div>
        <div className="flex flex-col gap-2">
          <RenderLinks links={internal_links} path={path} />
          <RenderLinks links={external_links} path={path} />
        </div>
      </aside>
      <nav className="flex bg-off-white absolute w-full  flex-col divide-y  shadow-xl">
        <div className="container p-3 md:p-0 mx-auto flex items-center my-2 justify-between">
          <div className="relative w-[150px] h-[50px] md:w-[300px] md:h-[80px]">
            <Image src={"/images/mf logo.png"} alt="logo" layout="fill" />
          </div>
          <IconContext.Provider
            value={{
              size: "1.5em",
              className: "z-50 block md:hidden",
              color: "#072B61",
            }}
          >
            <div
              style={{
                display: isOpen ? "none" : "block",
              }}
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <GiHamburgerMenu />
            </div>
          </IconContext.Provider>
          <div className="relative w-[150px] h-[50px] md:w-[300px] md:h-[80px]">
            <Image
              src={"/images/bf logo.png"}
              className=""
              alt="logo"
              layout="fill"
            />
          </div>
        </div>
        <div className="py-2 hidden md:flex">
          <div className="flex items-center justify-between container mx-auto text-sm text-r-blue">
            <ul className="flex items-center  justify-between gap-2 ">
              {internal_links.map((link) => (
                <li
                  className={`flex items-center pl-2 ${
                    path === link.href ? "font-bold " : ""
                  }`}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="relative group  transition-all duration-300"
                  >
                    {link.name}
                    <span className="ease absolute left-0 bottom-0 h-0 w-0 border-t-2 border-r-blue transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex items-center justify-between gap-2 ">
              {external_links.map((link) => (
                <li
                  className={`flex items-center pl-2 ${
                    path === link.href ? "font-bold " : ""
                  }`}
                  key={link.href}
                >
                  <Link
                    href={link.href}
                    className="relative group transition-all duration-300"
                  >
                    {link.name}
                    <span className="ease absolute left-0 bottom-0 h-0 w-0 border-t-2 border-r-blue transition-all duration-500 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
