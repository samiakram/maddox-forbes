import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { internalLinks, socialLinks } from "./data";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const socialLinkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <nav className="h-14 z-10 px-4 md:px-0 text-primaryWhite relative container mx-auto  w-full flex flex-col md:flex-row items-center justify-between">
      {!showNav && (
        <button
          onClick={() => setShowNav(true)}
          className="absolute md:hidden left-8 top-4 text-primaryWhite"
        >
          <IconContext.Provider value={{ size: "1.5em" }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </button>
      )}
      {showNav && (
        <button
          className="absolute left-8 top-4 z-30"
          onClick={() => setShowNav(false)}
        >
          <IconContext.Provider value={{ size: "1.5em", color: "#072B61" }}>
            <AiOutlineClose />
          </IconContext.Provider>
        </button>
      )}
      {showNav && (
        <motion.div
          className="fixed z-20 flex items-center pt-36 flex-col left-0 right-0 bottom-0 top-0 bg-offWhite text-navy"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <motion.ul
            className="flex items-center text-md flex-col gap-6 p-6"
            variants={menuVariants}
          >
            {internalLinks.map((link, index) => (
              <motion.li
                key={index}
                className="relative group"
                variants={linkVariants}
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowNav(false)}
              >
                <a href={link.url}>
                  {link.text}
                  <span className="absolute border-t-2 border-t-navy w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <motion.ul className="flex gap-6 z-10 p-6" variants={menuVariants}>
            {socialLinks.map((social) => (
              <motion.li key={social.id} variants={socialLinkVariants}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primaryWhite"
                >
                  <IconContext.Provider
                    value={{ size: "1.5em", color: "#072B61" }}
                  >
                    <social.icon />
                  </IconContext.Provider>
                </a>
              </motion.li>
            ))}
          </motion.ul>
          <a href="">
            <div className=" px-4 py-2 border transition-all duration-300 ease-in-out border-navy text-navy hover:bg-navy hover:text-primaryWhite">
              <span className="">Contact?</span>
            </div>
          </a>
        </motion.div>
      )}
      <ul className="gap-6 hidden md:flex items-center relative z-10">
        {internalLinks.map((link) => {
          return (
            <>
              <a href={link.url}>
                <li className="relative group w-min xl:w-auto text-center xl:text-left">
                  <span className="">{link.text}</span>
                  <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
                </li>
              </a>
            </>
          );
        })}
      </ul>
      <h3
        className={`absolute-center text-3xl z-20 ${
          showNav ? "text-navy" : ""
        }`}
      >
        <a href="/"> Maddox Forbes</a>
      </h3>
      <ul className="hidden md:flex gap-6 z-10">
        {socialLinks.map((social) => (
          <li key={social.id}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryWhite"
            >
              <IconContext.Provider value={{ size: "1.5em" }}>
                <social.icon />
              </IconContext.Provider>
            </a>
          </li>
        ))}
        <a href="">
          <li className="relative group w-min xl:w-auto text-center xl:text-left">
            <span className="">Contact?</span>
            <span className="absolute border-t-2 border-b-primaryWhite w-0 group-hover:w-full bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
          </li>
        </a>
      </ul>
    </nav>
  );
}
