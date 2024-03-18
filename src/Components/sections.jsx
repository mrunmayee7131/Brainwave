import SectionSvg from "../assets/svg/SectionSvg";
const Sections = ({
  className,
  children,
  crosses,
  crossesOffset,
  customPaddings,
  id,
}) => {
  return (
    <div
      id={id}
      className={`
      relative
       ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`}
         ${ className || "" }` } 
    >
      {children}

      <div className="hidden md:block absolute top-0 left-5 w-0.25 bg-stroke-1 h-full pointer-events-none lg:left-7.5 xl:left-10" />

      <div className="hidden md:block absolute top-0 right-5 w-0.25 bg-stroke-1 h-full pointer-events-none lg:right-7.5 xl:right-10" />
      {crosses && (
        <>
          <div
            className={`hidden lg:block absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none xl:left-0 right-0`}
          />
          <SectionSvg />
        </>
      )}
    </div>
  );
};

export default Sections;
