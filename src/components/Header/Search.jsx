import React, { useState } from "react";
import search from "../../assets/svgs/search.svg";

const Search = ({ openSearchDropdown, setOpenSearchDropdown }) => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  const searchButtons = [
    { title: "Herhangi bir yer", className: "pl-6" },
    { title: "Herhangi hafta" },
    { title: "Misafir ekleyin", className: "text-[#717171] font-normal" },
  ];

  const dropdownButtons = [
    {
      title: "Yer",
      text: "Gidilecek yerleri arayın",
      className: "w-[60%] !p-[14px_32px]",
    },
    {
      title: "Giriş",
      text: "Tarih ekleyin",
      className: "w-[20%]",
    },
    {
      title: "Çıkış",
      text: "Tarih ekleyin",
      className: "w-[20%]",
    },
    {
      title: "Kişiler",
      text: "Misafir ekleyin",
      className: "w-[50%]",
    },
  ];

  return (
    <>
      <div
        open={openSearchDropdown}
        onClick={() => setOpenSearchDropdown(true)}
        className="min-w-[300px] flex items-center mx-6 rounded-[40px] border border-[#dddddd] hover:shadow-hover shadow-[0px_1px_2px_rgba(0,0,0,0.08),0px_4px_12px_rgba(0,0,0,0.05)] [transition:transform_250ms_ease,opacity_100ms_ease,visibility_0ms_150ms] open:scale-x-[2.857142857142857] open:scale-y-[1.375] open:translate-y-[58px] open:opacity-0 open:invisible origin-[50%_0%] z-20"
      >
        {searchButtons.map((button, index) => (
          <>
            <button className={`h-12 font-medium px-4 min-w-[80px] whitespace-nowrap overflow-hidden text-ellipsis ${button.className || ""}`}>
                {button.title}
            </button>
            {index !== searchButtons.length - 1 && (
              <span className="w-[1px] h-6 bg-[#dddddd] inline-block" />
            )}
          </>
        ))}
        <button className="min-w-20 p-[10px] mr-[7px] bg-primary text-white rounded-full hover:shadow-hover flex-shrink-0">
          <img src={search} alt="Search" />
        </button>
      </div>

      {/* Dropdown */}
      <div
        open={openSearchDropdown}
        className="absolute w-full h-[162px] padding-container open:opacity-100 open:visible open:scale-[none] flex flex-col items-center justify-center pb-4 top-16 lg:top-0 left-0 opacity-0 invisible origin-[50%_0%] scale-x-[0.35] scale-y-[0.7272727272727273] translate-y-[-44px] [transition:transform_250ms_ease,opacity_200ms_ease_100ms,visibility_0ms_200ms] z-20"
      >
        <div className="h-20 flex items-center justify-center text-[1rem] lg:text-[.875rem] xl:text-[1rem] leading-5">
          {["Konaklama Yerleri", "Deneyimler", "Çevrim içi deneyimler"].map(
            (button, index) => (
              <button
                onClick={() => setActiveBtnIndex(index)}
                className={
                  `mx-[10px] my-3 xl:my-4 hover:after:h-[2px] hover:opacity-[0.65] hover:after:opacity-[.65] relative after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-0 after:bg-current ` +
                  (index == activeBtnIndex &&
                    "after:h-[2px] !opacity-100 after:!opacity-100")
                }
              >
                {button}
              </button>
            )
          )}
        </div>
        <div className="w-[min(100%,850px)] flex items-center h-[66px] border border-[#dddddd] rounded-[32px]">
          {dropdownButtons.map((button, index) => (
            <>
              {index !== 0 && (
                <div className="h-8 border-r border-light-grey" />
              )}
              <button
                className={"text-start p-[14px_24px] " + button.className}
              >
                <div className="text-[.75rem] font-semibold tracking-[0.04em] pb-[2px]">
                  {button.title}
                </div>
                <div className="text-[.875rem] leading-[18px] font-medium">
                  {index == 0 ? (
                    <input
                      type="text"
                      placeholder={button.text}
                      className="w-full outline-none"
                    />
                  ) : (
                    <div className="text-[#717171] font-thin whitespace-nowrap text-ellipsis overflow-hidden">
                      {button.text}
                    </div>
                  )}
                </div>
              </button>
            </>
          ))}
          <button className="w-12 h-12 rounded-[24px] flex-shrink-0 bg-[#ff385c] bg-gradient-to-r hover:[background:linear-gradient(to_right,#e61e4d_0%,#E31C5F_50%,#D70466_100%)] flex items-center justify-center mr-[9px]">
            <img
              src={require("../../assets/svgs/search.svg").default}
              alt="Search"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>

      {/* Black Background */}
      {openSearchDropdown && (
        <div
          onClick={() => setOpenSearchDropdown(false)}
          className="w-screen h-screen fixed bg-black bg-opacity-[.25] top-0 left-0 z-10"
        />
      )}
    </>
  );
};

export default Search;
