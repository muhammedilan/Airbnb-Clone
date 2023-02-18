import React from "react";
import { Link } from "react-router-dom";

import Banner from "./Banner";

import logo from "../../assets/svgs/logo.svg";
import logoAndAirbnb from "../../assets/svgs/logo-and-airbnb.svg";
import search from "../../assets/svgs/search.svg";
import world from "../../assets/svgs/world.svg";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";
import { ReactComponent as User } from "../../assets/svgs/user.svg";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const searchButtons = [
    { title: "Herhangi bir yer", className: "pl-6" },
    { title: "Herhangi hafta" },
    { title: "Misafir ekleyin", className: "text-[#717171] font-normal" },
  ];

  return (
    <>
      {/* Only after 744 pixels */}
      <Banner />

      {/* Only after 744 pixels */}
      <header className="h-20 hidden md:flex items-center justify-between padding-container">
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
        <div className="min-w-[300px] max-w-fit flex mx-6 items-center rounded-[40px] border border-[#dddddd] [transition:transform_250ms_ease,opacity_100ms_ease,visibility_0ms_50ms] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.18)] shadow-[0px_1px_2px_rgba(0,0,0,0.08),0px_4px_12px_rgba(0,0,0,0.05)]">
          {searchButtons.map((button, index) => (
            <>
              {index !== 0 && (
                <span className="w-[1px] h-6 bg-[#dddddd]"></span>
              )}
              <button
                className={`h-12 px-4 font-medium overflow-hidden whitespace-nowrap text-ellipsis ${button.className}`}
              >
                {button.title}
              </button>
            </>
          ))}

          <button className="p-[10px] mr-[7px] flex-shrink-0 bg-primary text-white rounded-full hover:shadow-[0px_2px_4px_rgba(0,0,0,0.18)]">
            <img src={search} alt="Search" />
          </button>
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

          <button className="w-[77px] h-[42px] p-[5px] pl-3 flex items-center gap-x-3 border text-[#717171] border-[#dddddd] rounded-[21px]">
            <Menu />
            <User />
          </button>
        </div>
      </header>

      {/* Only up to 744 pixels */}
      <MobileHeader />
    </>
  );
};

export default Header;
