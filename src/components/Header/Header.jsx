import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as World } from "../../assets/svgs/world.svg";
import { ReactComponent as HamburgerMenu } from "../../assets/svgs/hamburger-menu.svg";
import { ReactComponent as User } from "../../assets/svgs/user.svg";

import { mainNavigationMenu } from "../../data";
import Menu from "../Menu";
import Search from "./Search";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSearchDropdown, setOpenSearchDropdown] = useState(false);

  return (
    <header
      className={
        `h-20 z-20 sticky top-0 hidden md:flex items-center justify-between padding-container shadow-[0px_1px_#00000014] after:w-full after:h-full after:[transition:transform_150ms_ease,opacity_150ms_ease_75ms] after:bg-white after:absolute after:left-0 after:top-0 after:origin-[50%_0%] ` +
        (openSearchDropdown && "after:scale-y-[3] after:lg:scale-y-[2]")
      }
    >
      {/* Logo */}
      <Link
        className="min-w-fit h-16 flex items-center cursor-pointer z-10 flex-[1_0_0%]"
        to="/"
      >
        <picture>
          <source
            media="(min-width:1128px)"
            srcSet={require("../../assets/svgs/logo-and-airbnb.svg").default}
          />
          <img src={require("../../assets/svgs/logo.svg").default} />
        </picture>
      </Link>

      {/* Search */}
      <Search
        openSearchDropdown={openSearchDropdown}
        setOpenSearchDropdown={setOpenSearchDropdown}
      />

      {/* Move your home to Airbnb and Profile */}
      <div className="min-w-fit h-full flex items-center justify-end z-10 flex-[1_0_0%]">
        <div className="flex items-center mr-2">
          <Link to="/host/home" className="p-3 leading-[18px] text-center">
            Evinizi Airbnb'ye taşıyın!
          </Link>
          <button className="p-3 h-[42px]">
            <World />
          </button>
        </div>

        <Menu open={true} onClickAway={() => setOpen(false)}>
          <button
            onClick={() => setOpen(true)}
            className="w-[77px] h-[42px] p-[5px] pl-3 flex items-center gap-x-3 border border-[#dddddd] rounded-[21px] hover:shadow-hover"
          >
            <HamburgerMenu /> <User />
          </button>

          <Menu open={open}>
            <div className="w-[243px] absolute right-0 top-1/2 py-2 rounded-xl mt-[34px] shadow-[0px_2px_16px_#0000001f] bg-white">
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
  );
};

export default Header;
