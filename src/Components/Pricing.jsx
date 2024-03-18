import React from "react";
import Sections from "./sections";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
const Pricing = () => {
  return (
    <Sections>
      <div className="container relative">
        <div className="flex relative w-full h-[25rem]">
          <img
            src={smallSphere}
            height={255}
            width={255}
            className="hidden absolute left-[32rem] lg:flex"
          />
          <div className="absolute top-[10rem] left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className=" w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="[ Get started with Brainwave ]"
          title="Pay once, use forever"
        />
        <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
            
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Sections>
  );
};

export default Pricing;
