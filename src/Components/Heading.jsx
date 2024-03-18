import React from "react";

const Heading = ({ className, title, text,tag }) => {
  return (
    <div className={`${className || ""} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
       {tag && <h2 className="mb-4 md:justify-center text-center body-2 text-n-3">{tag}</h2>}
      {title && <h2 className="text-center h2">{title}</h2>}
      {text && <h2 className="text-center body-2 mt-4 text-n-4">{text}</h2>}
    </div>
  );
};

export default Heading;
