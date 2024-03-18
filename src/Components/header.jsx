import { brainwave } from "../assets";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "./design/Header";
import {enablePageScroll,disablePageScroll} from "scroll-lock"
const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}>
      <div className="flex items-start px-5 lg:px-7.5 xl:px-10 py-6">
        <a className="block w-[12rem] xl:mr-8" href='#hero'>
          <img src={brainwave} alt="brainwave logo" width={190} height={40} />
        </a>
        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((el) => (
              <a
                key={el.id}
                href={el.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1
               ${
                 el.onlyMobile ? "lg:hidden" : ""
               } px-6 lg:-mr-0.25 lg:text-xs lg:font-semibold 
               ${
                 el.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
               } lg:leading-5 py-4 lg:hover:text-n-1 xl:px-12`}
              >
                {el.title}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>

        <a
          href={"#signup"}
          className="button hidden py-4 lg:block mr-8 transition-colors hover:text-n-1  text-n-1/50 "
        >
          New Account
        </a>
       
        <Button className="hidden lg:flex " href="#login">
          Sign In
         
        </Button>
        
        <Button
          className="ml-auto lg:hidden "
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
