import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

const PricingList = () => {
  return (
    <div>
      <div className="relative flex gap-5 ">
        {pricing.map((el, index) => (
          <div
            className="flex gap-5 flex-col border px-6 lg:w-auto even:py-14 odd:py-8 odd:my-4 border-n-6 rounded-[2rem] [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:"
            key={index}
          >
            <h4 className="h4 mb-4">{el.title}</h4>
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
              {el.description}
            </p>
            <div className="flex items-center h-[5.5rem] mb-6">
              {el.price && (
                <>
                  {" "}
                  <div className="h3">$</div>
                  <div className="text-[5.5rem] leading-none font-bold">
                    {el.price}
                  </div>
                </>
              )}
            </div>
            <Button className="w-full mb-6" white={!!el.price}>
              {el.price ? "Get started" : "Contact us"}
            </Button>
            <ul>
              {el.features.map((el, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-6"
                >
                  <img src={check} width={24} height={24} alt="Check" />
                  <p className="body-2 ml-4">{el}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingList;
