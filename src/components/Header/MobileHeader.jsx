import React, { memo } from "react";

const MobileHeader = () => {
  return (
    <header className="md:hidden p-[14px_24px_0_24px] select-none">
      <div className="w-full h-[54px] bg-white border-[0.5px] border-[rgba(0,0,0,0.08)] rounded-full flex items-center">
        <button>
          <img
            src={require("../../assets/svgs/search-mobile.svg").default}
            alt="Search"
            className="pr-4 pl-5"
          />
        </button>
        <div className="grow cursor-pointer">
          <div className="text-[.875rem] ">Herhangi bir yer</div>
          <div className="text-[.75rem] text-[#717171]">
            <span>Herhangi hafta</span>
            <span className="px-[5px]">•</span>
            <span>Misafir ekleyin</span>
          </div>
        </div>
        <button className="w-9 h-9 mx-[10px] rounded-[25px] border border-[#dddddd] flex items-center justify-center">
          <img
            src={require("../../assets/svgs/filter.svg").default}
            alt="Filter"
          />
        </button>
      </div>
    </header>
  );
};

export default memo(MobileHeader);
