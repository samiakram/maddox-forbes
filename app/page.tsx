"use client";

import React from "react";
import Nav from "./Nav";

import Image from "next/image";
import SlidingInComponent from "./SlidingIn";
import Footer from "./footer";
import ApplyNow from "./ApplyNow";
import LoanProcess from "./LoanProcess";
import Employees from "./Employees";
import About from "./About";
import Landing from "./Landing";
import Services from "./Services";
import Residential from "./Residential";
import Commercial from "./Commercial";
import Investment from "./Investment";
import USDA from "./USDA";
import Standing from "./Standing";
import CustomBuild from "./CustomBuild";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <About />
      <Standing />
      <Employees />
      <LoanProcess />
      <Services />
      <Residential />
      <Investment />
      <Commercial />
      <USDA />
      <CustomBuild />
      <Footer />
    </main>
  );
}
