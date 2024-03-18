import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Components/Button";
import Header from "./Components/header";
import Hero from "./Components/Hero";
import Benefits from "./Components/Benefits";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <>
      <div className="p-[4.75rem] lg:pt-[5.75rem] overflow-hidden ">
        <Header />
        <Hero />
        <Benefits />
        <Features />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
