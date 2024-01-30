"use client";

import React, { useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutUs from "@/components/about";
import Footer from "@/components/footer";
import Skills from "@/components/skills";
import Work from "@/components/work";
import GetInTouch from "@/components/get";
import { useAppSelector } from "@/reduxtoolkit/store/store";
// import Testimonials from "@/components/testimonials";
import Experience from "@/components/experience";

const HomePage = () => {
  const theme = useAppSelector((store) => store.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    } else {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    }
  }, [theme]);
  return (
    <>
      <Header theme={theme} />
      <Hero />
      <AboutUs />
      <Skills />
      <Experience />
      <Work />
      {/* <Testimonials /> */}
      <GetInTouch />
      <Footer />
    </>
  );
};

export default HomePage;
