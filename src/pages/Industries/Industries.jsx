import React, { useRef } from "react";
import IndustryCard from "../../components/IndustryPage/IndustryCard/IndustryCard";
import EngineerCard from "../../components/IndustryPage/EngineerCard/EngineerCard";

import Navbar from "../../components/shared/Navbar/Navbar";
import useScrollToSection from "../../Hooks/useScrollToSection";

function IndustriesPage() {
  const architecturalRef = useRef(null);
  const oilAndGasRef = useRef(null);
  const engineerRef = useRef(null);
  const marineRef = useRef(null);
  const energyRef = useRef(null);

  const refs = {
    architechture: architecturalRef,
    oil: oilAndGasRef,
    engineer: engineerRef,
    marine: marineRef,
    energy: energyRef,
  };

  useScrollToSection(refs);
  return (
    <>
      <Navbar />
      <div ref={architecturalRef}>
        <IndustryCard
          img="/industryPage/1.webp"
          firstWord="Architecture and"
          secondWord="Urban Planning"
          p="Mosaic Holding Corporation is deeply embedded in the architectural landscape. This division covers a broad spectrum of architectural services, from conceptual design and master planning to project execution. MHC leverages its expertise in this sector to foster innovation in both commercial and residential projects, blending creative vision with practicality. In 2024, the global architecture industry is valued at approximately $410 billion, driven by urbanization, sustainable design trends, and technological integration, and stock values in architecture firms have seen steady growth, with an average increase of 6-8% annually. "
          icon="/homePage/icons/icon1.png"
          link="/arup"
        />
      </div>
      <div ref={engineerRef}>
        <EngineerCard />
      </div>
      <div ref={oilAndGasRef}>
        <IndustryCard
          img="/industryPage/3.webp"
          firstWord="Oil and"
          secondWord="Gas"
          type="horizontal"
          p="The oil and gas industry remains one of the largest and most volatile, with a global market size of $4.5 trillion in 2024. Despite the energy transition toward renewables, the demand for oil and gas continues to dominate, driven by industrial, transportation, and energy needs. Mosaic Holding Corporation’s involvement in this sector aligns with its strategic interest in energy management and marine structures. "
          icon="/homePage/icons/icon3.png"
        />
      </div>
      <div ref={marineRef}>
        <IndustryCard
          img="/industryPage/4.webp"
          firstWord="Marine and Offshore"
          secondWord="Structures"
          p="Mosaic Holding Corporation brings specialized expertise in the design and development of marine and offshore structures. for the oil, gas, and renewable energy sectors, is valued at $128 billion in 2024. This industry includes projects like offshore wind farms, oil rigs, and port developments. Market drivers include the expansion of renewable energy initiatives (offshore wind) and the ongoing global demand for oil and gas."
          icon="/homePage/icons/icon4.png"
        />
      </div>
      <div ref={energyRef}>
        <IndustryCard
          img="/industryPage/5.webp"
          firstWord="Energy "
          type="horizontal"
          secondWord="Management"
          p="Mosaic Holding Corporation supports industries in managing their energy needs through sustainable and cost-efficient strategies. The industry has seen significant growth in 2024, with a global market value exceeding $46 billion. This division focuses on optimizing energy consumption in various sectors, implementing advanced technologies for energy storage, distribution, and generation. Whether through renewable energy integration or the enhancement of existing energy systems, MHC provides cutting-edge solutions to ensure efficient energy use and reduce environmental impact."
          icon="/homePage/icons/icon5.png"
        />
      </div>
    </>
  );
}

export default IndustriesPage;
