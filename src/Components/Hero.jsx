import Section from "./sections";
import curve from "../assets/hero/curve.png";
import Button from "./Button";
import robot from "../assets/hero/robot.jpg";
import heroBackground from "../assets/hero/hero-background.jpg";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./generating";
import CodeGeneration from "./codegeneration";
import Companylogos from "./companylogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilites of&nbsp;AI&nbsp;Chatting with{" "}
            <span className="inline-block relative">
              Brainwave
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt={curve}
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            {" "}
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.8rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] ">
                <img
                  src={robot}
                  className="w-full -translate-y-[8%] scale-[1-7] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="ai"
                />
                <Generating className="absolute left-4 right-4 bottom-15 md:bottom-20 md:left-[15%] md:right-[15%] lg:left-[25%] lg:right-[25%]" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[9.5rem] px-1 py-1 bg-n-9/40 backfrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((el, index) => (
                      <li className="p-5" kry={index}>
                        <img src={el} width={24} height={24} alt={el} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <CodeGeneration
                    className="hidden absolute -right-[5.5rem] bottom-[15rem]  w-[18rem] xl:flex"
                    title={"Code Generation"}
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-[1/2] width-[234%] translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full lg:scale-[1] md:-translate-x-[63.5%] md:translate-y-[2%] md:scale-[1.05] scale-[2.5] translate-y-[35%] -translate-x-[50%]"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
      </div>
      <BottomLine />
      <Companylogos className="hidden relative z-10 mt-20 lg:block" />
    </Section>
  );
};

export default Hero;
