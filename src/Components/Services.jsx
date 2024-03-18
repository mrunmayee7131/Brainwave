import React from "react";
import Sections from "./sections";
import Heading from "./Heading";
import { check, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./generating";
import {
  Gradient,
  PhotChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
const Services = () => {
  return (
    <Sections>
      <div className="container">
        <Heading
          title={"Generative AI made for creaters."}
          text={"Brainwave unlocks the potential of ai powered applications"}
        />
        <div className="relative">
          <div className=" border border-n-1/10 rounded-3xl  h-[39rem] xl:h-[46rem]">
            <div className=" md:w-3/5 xl:w-auto w-full h-full pointer-events-none flex ">
              <img src={service1} className="h-full" width={800} />
              <div className="relative top-[13rem] max-w-[17rem] left-[5rem]">
                <h4 className="h4 mb-4">Smartest AI</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Brainwave unlocks the potential of AI-powered applications
                </p>
                <ul>
                  {brainwaveServices.map((el, index) => (
                    <li>
                      <div className="flex border-t border-n-6 py-4">
                        <img src={check} alt="check" />
                        <p className="ml-4">{el}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          <Gradient />
        </div>
        <div className="flex py-5 gap-5">
          <div className="w-[50%] h-[49rem] border border-n-1/10 rounded-3xl overflow-hidden relative">
            <img
              src={service2}
              className=" object-cover h-full"
              width={630}
              height={950}
              alt="robot"
            />
            <div className="bg-gradient-to-b from-n-8/0 to-n-8/90 absolute bottom-0 h-[13rem] mx-15 w-[32rem]">
              <h4 className="h4 mb-4">Photo editing</h4>
              <p className="body-2 mb-[3rem] text-n-3 w-full">
                Automatically enhance your photos using our AI app&apos;s photo
                editing feature. Try it now!
              </p>
            </div>
            <PhotChatMessage />
          </div>
          <div className="w-[50%] h-[49rem] border border-n-1/10 rounded-3xl overflow-hidden relative flex flex-col bg-n-7">
            <div className="mt-[5rem] mx-[3rem]">
              <h4 className="h4 mb-4">Video generation</h4>
              <p className="body-2 mb-[2rem] text-n-3">
                The world’s most powerful AI photo and video art generation
                engine. What will you create?
              </p>
              <ul className="flex flex-row justify-around items-center">
                {brainwaveServicesIcons.map((el, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex justify-center items-center ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img src={el} alt={el} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" mt-15 mb-5 mx-5 bg-n-8 rounded-2xl overflow-hidden relative">
              <img
                src={service3}
                className=" object-cover"
                width={630}
                height={750}
                alt="robot"
              />
              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
        </div>
      </div>
    </Sections>
  );
};

export default Services;
