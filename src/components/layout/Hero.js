import React, { useEffect, useState } from "react";

import Section from "./Section";

const Hero = () => {
  const [iClass, setiClass] = useState(false);
  useEffect(() => {
    const handleScroll = e => {
      if (e.srcElement.scrollingElement.scrollTop > 10) {
        setiClass(true);
      } else {
        setiClass(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [iClass]);

  return (
    <>
      <section className="hero">
        <h1>
          <span>power</span> <span>source</span>
        </h1>
        <i className={`hero-arrow ${iClass ? "hero-arrow__hide" : ""}`}></i>
      </section>
      <Section />
    </>
  );
};

export default Hero;
