import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const codeGeneration = ({ className, title }) => {
  return (
    <div
      className={`${
        className || " "
      } bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl flex  items-center p-4 pr-6 gap-5`}
    >
      <img
        src={notification1}
        height={65}
        width={65}
        alt="notification"
        className="rounded-2xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((el, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={el}
                  className="w-full"
                  height={20}
                  width={20}
                  alt={el}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default codeGeneration;
