import React from "react";
import Sections from "./sections";
import { collabApps, collabContent, collabText } from "../constants";
import { check, brainwaveSymbol } from "../assets";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
const Features = () => {
  return (
    <Sections crosses>
      <div className="container flex xl:flex-row flex-col">
        <div className="flex flex-col max-w-[25rem]">
          <h2 className="h2">AI Chat App for seamless collaboration</h2>
          <ul className="max-w-[22rem] ">
            {collabContent.map((el, index) => (
              <li className=" my-[2.5rem] " key={index}>
                <div className="flex flex-row gap-5">
                  <img
                    src={check}
                    alt={el.title}
                    height={25}
                    width={25}
                    className="mb-4"
                  />
                  <h6 className="body-2  ">{el.title}</h6>
                </div>
                {el.text && <p className=" body-2  text-n-4">{el.text}</p>}
              </li>
            ))}
          </ul>
          <Button className="max-w-[9rem] ">Try it Now</Button>
        </div>
        <div className="flex flex-col">
          <p className="body-2  text-n-4 absolute  xl:max-w-[23rem] xl:right-[8rem] mt-5 xl:mt-0">
            {collabText}
          </p>
          <div className="border flex border-n-6 rounded-full w-[22rem] relative aspect-square left-[110%] top-[12rem]">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute  left-1/2 h-1/2 -ml-[1.6rem]
             origin-bottom rotate-${index * 45} }`}
                >
                  <div
                    className={`relative  -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl  -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Sections>
  );
};

export default Features;
