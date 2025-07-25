import { FaRegLightbulb } from "react-icons/fa";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import { MdOutlineEngineering } from "react-icons/md";

function EngineerCard() {
  return (
    <>
      <div className="">
        <img
          className="w-full lg:h-[70vh] object-cover"
          src="/industryPage/2.webp"
          alt=""
        />
        <div className="bg-lightGray relative translate-y-[-10%]  sm:mx-10  p-8 md:px-14">
          <div className="flex items-center">
            <div className=" border-[3px] me-5 border-mainGold text-mainGold rounded-full flex justify-center  w-16 h-16 items-center ">
              <img
                className="w-[70%] "
                src="/homePage/icons/icon2.png"
                alt=""
              />
            </div>{" "}
            <SectionHeader firstWord="Engineering" link="/wolsey" />
          </div>
          <Paragraph p="Mosaic Holding Corporation’s engineering arm is multi-disciplinary, encompassing several specialized fields:" />
          <br />
          <br />
          <div className=" md:px-16 flex items-stretch">
            <SectionHeader
              firstWord="Structural"
              secondWord="Engineering"
              fontSize="lg"
            />
          </div>
          <div className="md:px-16 text-justify">
            <Paragraph p="Through Wolsey Structural Engineering, MHC provides top-tier structural solutions, ensuring the integrity and safety of building frameworks. This branch specializes in designing robust and efficient structures that withstand natural and man-made stresses. From high-rise buildings to complex infrastructure projects. This market is expected to reach $112 billion in 2024, The global market reached 112$ million and is expected to grow 1.5 annually" />
          </div>
          <br />
          <br />
          <div className="md:px-16 flex items-stretch">
            <SectionHeader
              firstWord="Electrical"
              secondWord="Engineering"
              fontSize="lg"
            />
          </div>
          <div className="md:px-16 text-justify">
            <Paragraph p="MHC offers comprehensive electrical engineering services, which are integral to the design, installation, and maintenance of electrical systems in various facilities. This includes the design of power systems, lighting, and controls that meet the latest standards of efficiency and sustainability. In 2024, it holds a market valuation of $234 billion, with a 6% CAGR projected through 2028." />
          </div>
          <br />
          <br />
          <div className="md:px-16 flex items-stretch">
            <SectionHeader
              firstWord="Mechanical"
              secondWord="Engineering"
              fontSize="lg"
            />
          </div>
          <div className="md:px-16 text-justify">
            <Paragraph p="This division focuses on the design, operation, and maintenance of mechanical systems that drive HVAC, plumbing, and other critical building infrastructure. MHC’s mechanical engineering, which is valued at $440 billion globally services ensure systems operate at optimal performance, enhancing both energy efficiency and comfort for end users." />
          </div>
          <br />

          <div className="bg-gray-400 rounded-xl w-full h-[1px] mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default EngineerCard;
