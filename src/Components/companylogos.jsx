import React from "react";
import { companyLogos } from "../constants";

const Companylogos = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="tagline mb-[6rem] text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex justify-evenly">
        {companyLogos.map((el, index) => (
          <li>
            <img src={el} alt={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Companylogos;
