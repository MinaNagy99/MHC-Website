import React from "react";
import IntroductionOfSignatureProjects from "../../components/SignatureProjects/IntroductionOfSignatureProjects/IntroductionOfSignatureProjects";
import Holdings from "../../components/SignatureProjects/Holdings/Holdings";
import Navbar from "../../components/shared/Navbar/Navbar";

function HoldingsPage() {
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1 mt-20  ">
        <div className="col-span-1 flex flex-col p-10 justify-center items-start mt-10">
          <IntroductionOfSignatureProjects />
        </div>
        <div className="col-span-1  flex flex-col justify-center lg:p-8 lg:px-24 p-10  items-start bg-lightGray">
          <Holdings />
        </div>
      </div>
    </>
  );
}

export default HoldingsPage;
