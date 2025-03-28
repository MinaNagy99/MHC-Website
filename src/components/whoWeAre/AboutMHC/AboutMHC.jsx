import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";

function AboutMHC() {
  return (
    <>
      <br />
      <div className="md:w-3/4 m-auto">
        <SectionHeader
          firstWord="ABOUT MOSAIC"
          secondWord="HOLDING CORPORATION"
        />
      </div>
      <br />
      <div className="md:w-3/4 m-auto text-justify">
        <Paragraph
          p="Established in mid-2023, “Mosaic Holding Corporation” (MHC)  has quickly become a respected name through a series of 
        strategic acquisitions. Specialised in SME leveraged buyout (LBO) acquisitions, strategically targeting mid-cap companies with significant growth potential."
        />
        <Paragraph
          p="With a sharp focus on acquiring companies with proven expertise, MHC operates in industries including Architecture, Structural, Electrical, and Mechanical Engineering, Marine and Offshore Structures, Oil and Gas, and Energy Management. Through our 
        acquisition model, we not only integrate these companies into our portfolio but also provide the necessary resources, whether technical, financial, or manpower, to enhance their operations and elevate their market position. "
        />
        <Paragraph p="By offering comprehensive support and expertise, we empower our acquisitions to reach new levels of performance and success, aligning with MHC's commitment to excellence and innovation across all industries we serve. Today, we proudly own “Wolsey Structural Engineering” , “ARUP DATTA ARCHITECT”, “Kallar Architecture” and “MHCEG”, have roles in expanding our capabilities and reinforcing our commitment to delivering high-quality, luxurious solutions across diverse sectors." />
        <Paragraph p="Our growth is driven by core values that define who we are—integrity, innovation, and collaboration. We prioritize fostering strong relationships with the companies we acquire, allowing them to thrive while maintaining their unique strengths. At MHC, we are dedicated to delivering exceptional results, combining luxury and precision in every project. As we continue to expand, these values will remain central to our mission, ensuring we consistently meet and exceed the expectations of our clients and partners." />
      </div>
    </>
  );
}

export default AboutMHC;
