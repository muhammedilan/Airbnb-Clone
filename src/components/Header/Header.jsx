import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Banner from "./Banner";

import logo from "../../assets/svgs/logo.svg";
import logoAndAirbnb from "../../assets/svgs/logo-and-airbnb.svg";
import world from "../../assets/svgs/world.svg";
import menu from "../../assets/svgs/menu.svg";
import user from "../../assets/svgs/user.svg";
import MobileHeader from "./MobileHeader";
import Menu from "../Menu";
import Search from "./Search";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSearchDropdown, setOpenSearchDropdown] = useState(false);

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

  return (
    <>
      <Banner />

      <header
        className={
          `h-20 hidden md:flex items-center justify-between padding-container relative after:z-10 after:w-full after:h-full after:[transition:transform_150ms_ease,opacity_150ms_ease_75ms] after:bg-white after:absolute after:left-0 after:top-0 after:origin-[50%_0%] ` +
          (openSearchDropdown && "after:scale-y-[3] after:lg:scale-y-[2]")
        }
      >
        {/* Logo */}
        <Link
          className="min-w-fit h-16 flex items-center flex-1 cursor-pointer z-20"
          to="/"
        >
          <picture>
            <source media="(min-width:1128px)" srcSet={logoAndAirbnb} />
            <img src={logo} />
          </picture>
        </Link>

        {/* Search */}
        <Search
          openSearchDropdown={openSearchDropdown}
          setOpenSearchDropdown={setOpenSearchDropdown}
        />

        {/* Move your home to Airbnb and Profile */}
        <div className="min-w-fit flex-1 flex items-center justify-end z-20">
          <div className="flex items-center mr-2">
            <Link to="/host/home" className="p-3 leading-[18px] text-center">
              Evinizi Airbnb'ye taşıyın!
            </Link>
            <button className="p-3 h-[42px]">
              <img src={world} alt="World" />
            </button>
          </div>

          <Menu open={true} onClickAway={() => setOpen(false)}>
            <button
              onClick={() => setOpen(true)}
              className="w-[77px] h-[42px] p-[5px] pl-3 flex items-center gap-x-3 border border-[#dddddd] rounded-[21px] hover:shadow-hover"
            >
              <img src={menu} alt="Menu" />
              <img src={user} alt="User" />
            </button>

            <Menu open={open}>
              <div className="w-[243px] absolute right-0 top-1/2 py-2 rounded-xl mt-[34px] shadow-[0px_2px_16px_rgba(0,0,0,0.12)] bg-white">
                {mainNavigationMenu.map((menu, index) => (
                  <div key={index}>
                    {menu.map((navigation, navIndex) => (
                      <Link
                        key={navIndex}
                        onClick={() => setOpen(false)}
                        className={`py-3 px-4 block ${navigation.className}`}
                      >
                        {navigation.title}
                      </Link>
                    ))}

                    {index !== mainNavigationMenu.length - 1 && (
                      <div className="h-[1px] my-2 bg-[#dddddd]" />
                    )}
                  </div>
                ))}
              </div>
            </Menu>
          </Menu>
        </div>
      </header>

      <MobileHeader />
    </>
  );
};

export default Header;
