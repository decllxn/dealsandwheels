import React from "react";
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import WhyChooseUs from "./WhyChooseUs";
import OurMission from "./OurMission";
import OurVision from "./OurVision";
import FAQSection from "./FAQsection";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-20">About Us</h1>
      <WhoWeAre />
      <WhatWeDo />
      <WhyChooseUs />
      <OurMission />
      <OurVision />
      <FAQSection />
    </div>
  )
}


export default About;