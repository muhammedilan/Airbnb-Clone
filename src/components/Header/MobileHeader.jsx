import React from "react";
import { ReactComponent as Search } from "../../assets/svgs/search-mobile.svg";
import { ReactComponent as Filter } from "../../assets/svgs/filter.svg";

const MobileHeader = () => {
  return (
    <header className="bg-white sticky top-0 md:hidden p-[14px_24px_0_24px] z-20">
      <div className="w-full h-[54px] bg-white border-[0.5px] border-[#00000014] shadow-[0px_3px_10px_#0000001a] rounded-full flex">
        <button className="w-full flex items-center text-start">
          <Search className="mr-4 ml-5" />
          <div className="grow cursor-pointer">
            <div className="text-[.875rem]">Herhangi bir yer</div>
            <div className="text-[.75rem] text-[#717171]">
              <span>Herhangi hafta</span>
              <span className="px-[5px]">•</span>
              <span>Misafir ekleyin</span>
            </div>
          </div>
        </button>
        <button>
          <div className="w-9 h-9 mx-[10px] rounded-[25px] border border-[#dddddd] flex items-center justify-center">
            <Filter />
          </div>
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
