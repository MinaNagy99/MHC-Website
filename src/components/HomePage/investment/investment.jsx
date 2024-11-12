import React from "react";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import Paragraph from "../../shared/paragraph";
import "./investment.css";
import { Link } from "react-router-dom";
function Investment() {
  return (
    <>
    <img className=" icon" src="/images/icon.svg" alt="" />
      <div className="grid md:grid-cols-3 gap-10 grid-cols-2">
        <div className="col-span-2 flex items-start flex-col justify-center  md:pe-40">
          <SectionHeader firstWord="INVESTMENT" secondWord="APPROACH" />
          <br />
          <Paragraph
            p="Mosaic Holding Corporation’s Investment Approach drives sustainable 
growth with tailored, risk-managed strategies. Focused on market 
analysis and diversification, Mosaic reduces risks while enhancing stability"
          />
          <Paragraph
            p="By investing in high-value, growth-oriented assets and maintaining 
transparency, Mosaic ensures an adaptable, client-focused investment 
experience for lasting success"
          />
        </div>
        <div className="md:col-span-1 md:p-0 p-14 col-span-2 relative flex items-center">
          <div className="relative w-full investmentImg overflow-hidden">
            <img
              className="w-full object-contain   relative"
              src="/homePage/investment.jpg"
              alt="investment approach"
            />
            <div className="InvestmentLayer   flex flex-col   p-10">
              <h2 className="font-bold text-3xl text-white">INVESTMENT</h2>
              <h2 className="font-bold text-3xl text-white">APPROACH</h2>

              <div className="flex items-center mt-4">
                <Link to="investment-approach">
                  <p className="me-3 text-white">Discover more</p>
                </Link>
                <i className="fa-solid font-light mt-1 fa-arrow-right-long text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Investment;
