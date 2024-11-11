import React from "react";
import { Link } from "react-router-dom";

function Holdings() {
  const holding = [
    {
      text: "Wolsey",
      logo: "/signatureProjects/wolsey.png",
      link: "/wolsey-projects",
    },
    {
      text: "Arup Datta Architect",
      logo: "/signatureProjects/arup.png",
      link: "/arup-projects",
    },
    {
      text: "MHCEG Consultancy",
      logo: "/signatureProjects/mhceg.png",
    },
  ];
  return (
    <>
      <h2 className="mb-8 text-xl font-bold"> Spotlights</h2>

      {holding.map((hold, index) => (
        <div key={index} className="flex items-center my-3  justify-start ps-5">
          <Link to={hold.link}>
            <img className="pe-4" src={hold.logo} alt="" />
          </Link>
          <p className={`mt-0  sm:text-small text-[12px] `}>{hold.text}</p>
        </div>
      ))}

    </>
  );
}

export default Holdings;
