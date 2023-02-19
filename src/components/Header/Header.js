import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Banner from "./Banner";

import logo from "../../assets/svgs/logo.svg";
import logoAndAirbnb from "../../assets/svgs/logo-and-airbnb.svg";
import search from "../../assets/svgs/search.svg";
import world from "../../assets/svgs/world.svg";
import menu from "../../assets/svgs/menu.svg";
import user from "../../assets/svgs/user.svg";
import MobileHeader from "./MobileHeader";
import ClickAwayListener from "../ClickAwayListener";

const Header = () => {
  const [open, setOpen] = useState(false);
  const searchDropdown = useRef();

  const searchButtons = [
    { title: "Herhangi bir yer", className: "pl-6" },
    { title: "Herhangi hafta" },
    { title: "Misafir ekleyin", className: "text-[#717171] font-normal" },
  ];

  const mainNavigationMenu = [
    [
      { title: "Kaydolun", className: "font-semibold" },
      { title: "Oturum Açın" },
    ],
    [
      { title: "Evinizi Airbnb'ye taşıyın" },
      { title: "Bir deneyime ev sahipliği yapın" },
      { title: "Yardım" },
    ],
  ];

  function toggleSearchDropdown() {
    const toggleClassList = ["opacity-0", "invisible", "!scale-[none]"];
    toggleClassList.map((className) =>
      searchDropdown.current.classList.toggle(className)
    );
  }

  return (
    <>
      {/* Only after 744 pixels */}
      <Banner />

      {/* Only after 744 pixels */}
      <header className="h-20 hidden md:flex items-center justify-between padding-container relative">
        {/* Logo */}
        <Link
          className="min-w-fit h-16 flex items-center flex-1 cursor-pointer"
          to="/"
        >
          <picture>
            <source media="(min-width:1128px)" srcSet={logoAndAirbnb} />
            <img src={logo} />
          </picture>
        </Link>

        {/* Search */}
        <button
          onClick={(e) => toggleSearchDropdown(e)}
          className="min-w-[300px] max-w-fit flex mx-6 items-center rounded-[40px] border border-[#dddddd] [transition:transform_250ms_ease,opacity_100ms_ease,visibility_0ms_50ms] hover:shadow-hover shadow-[0px_1px_2px_rgba(0,0,0,0.08),0px_4px_12px_rgba(0,0,0,0.05)]"
        >
          {searchButtons.map((button, index) => (
            <div key={index}>
              {index !== 0 && (
                <span className="w-[1px] h-6 bg-[#dddddd]"></span>
              )}
              <button
                className={`h-12 px-4 font-medium overflow-hidden whitespace-nowrap text-ellipsis ${button.className}`}
              >
                {button.title}
              </button>
            </div>
          ))}
          <button className="p-[10px] mr-[7px] flex-shrink-0 bg-primary text-white rounded-full hover:shadow-[0px_2px_4px_rgba(0,0,0,0.18)]">
            <img src={search} alt="Search" />
          </button>
        </button>

        {/* Search Dropdown */}
        <div
          className="absolute w-full h-[162px] flex items-center justify-center px-20 top-0 left-0 opacity-0 invisible origin-[50%_0%] scale-x-[0.35] scale-y-[0.7272727272727273] translate-y-[-44px] [transition:transform_250ms_ease,opacity_200ms_ease_100ms,visibility_0ms_200ms]"
          ref={searchDropdown}
        >
          <div className="max-w-[850px]">
            <div className="flex items-center justify-center"></div>
          </div>
        </div>

        {/* Move your home to Airbnb and Profile */}
        <div className="min-w-fit flex-1 flex items-center justify-end">
          <div className="flex items-center mr-2">
            <Link to="/host/home" className="p-3 leading-[18px] text-center">
              Evinizi Airbnb'ye taşıyın!
            </Link>
            <button className="p-3 h-[42px]">
              <img src={world} alt="World" />
            </button>
          </div>

          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <button
              onClick={() => setOpen(!open)}
              className="w-[77px] h-[42px] relative p-[5px] pl-3 flex items-center gap-x-3 border border-[#dddddd] rounded-[21px] hover:shadow-hover"
            >
              <img src={menu} alt="Menu" />
              <img src={user} alt="User" />
            </button>

            {open && (
              <div className="w-[243px] absolute right-0 top-full py-2 rounded-xl mt-[34px] shadow-[0px_2px_16px_rgba(0,0,0,0.12)] bg-white">
                {mainNavigationMenu.map((menu, index) => (
                  <div key={index}>
                    {menu.map((navigation, navIndex) => (
                      <Link
                        onClick={() => setOpen(false)}
                        className={`py-3 px-4 block ${navigation.className}`}
                        key={navIndex}
                      >
                        {navigation.title}
                      </Link>
                    ))}

                    {index !== mainNavigationMenu.length - 1 && (
                      <div key={index} className="h-[1px] my-2 bg-[#dddddd]" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </ClickAwayListener>
        </div>
      </header>

      {/* Only up to 744 pixels */}
      <MobileHeader />

      {/* use window size yap bunu sadece mobilde göster üsttekini de aynı yap */}
    </>
  );
};

export default Header;
