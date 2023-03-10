import React, { useEffect, useRef, useState } from "react";
import { categories } from "../../data";

const Categories = () => {
  const [sliderPage, setSliderPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const slider = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  function handleClickPrevButton() {
    const sliderWidth = slider.current.clientWidth;
    const scrollLeft = slider.current.scrollLeft;
    const limit = scrollLeft - sliderWidth * 2 <= 0;

    slider.current.scrollTo(limit ? 0 : scrollLeft - sliderWidth, 0);
    setSliderPage(sliderPage - 1);
    limit && prevButton.current.setAttribute("disabled", true);
  }

  function handleClickNextButton() {
    const sliderWidth = slider.current.clientWidth;
    const sliderScrollWidth = slider.current.scrollWidth;
    const limit = sliderWidth * sliderPage * 2 > sliderScrollWidth;

    slider.current.scrollTo(
      limit ? sliderScrollWidth - sliderWidth : sliderWidth * sliderPage,
      0
    );
    setSliderPage(sliderPage + 1);
    limit && nextButton.current.setAttribute("disabled", true);
    prevButton.current.classList.remove("opacity-0");
  }

  return (
    <div className="flex mt-5 gap-x-6">
      {/* Slider */}
      <div className="grow overflow-hidden relative">
        <button
          ref={prevButton}
          onClick={() => {
            nextButton.current.removeAttribute("disabled");
            handleClickPrevButton();
          }}
          className="h-full absolute hidden md:flex items-center opacity-0 disabled:opacity-0 disabled:invisible after:w-10 after:h-full [background-image:linear-gradient(to_left,#ffffff00,#fff_40px)] duration-200 ease-[ease] transition-[opacity_visibilty_transform] z-10"
        >
          <div className="w-[28px] h-[28px] bg-white rounded-full hover:scale-[1.04] border-[.5px] border-[rgba(0,0,0,.3)] flex items-center justify-center">
            <img
              src={require("../../assets/svgs/arrow-right.svg").default}
              className="w-3 h-3"
              alt="Arrow Left"
            />
          </div>
        </button>

        <div
          className="h-[78px] overflow-x-scroll scroll-hidden snap-mandatory scroll-smooth flex whitespace-nowrap gap-x-8 duration-300"
          ref={slider}
        >
          {categories.map((category, index) => {
            const selected = index == selectedCategory;
            return (
              <div
                onClick={() => setSelectedCategory(index)}
                className="py-1 m-[10px_0px_12px] flex flex-col items-center rounded-md gap-y-2 relative group cursor-pointer"
              >
                <img
                  alt="Navigation"
                  loading="lazy"
                  src={category.image}
                  data-selected={selected}
                  className="w-6 h-6 data-[selected=true]:opacity-100 group-hover:opacity-100 group-active:scale-[.96] opacity-[0.6425339366515838] duration-200 transition-[opacity_transform] ease-[ease]"
                />
                <div
                  data-selected={selected}
                  className="text-[.75rem] text-[#717171] data-[selected=true]:text-black group-hover:text-black group-active:scale-[.96] group-active:translate-y-[-1px] duration-200 transition-[color_transform] ease-[ease]"
                >
                  {category.title}
                </div>
                <div
                  data-selected={selected}
                  className="w-full h-[2px] bg-light-grey absolute left-0 -bottom-3 hidden group-hover:block data-[selected=true]:bg-black data-[selected=true]:block"
                />
              </div>
            );
          })}
        </div>

        <button
          ref={nextButton}
          onClick={() => {
            prevButton.current.removeAttribute("disabled");
            handleClickNextButton();
          }}
          className="h-full absolute top-0 right-0 hidden md:flex items-center disabled:opacity-0 disabled:invisible before:w-10 before:h-full [background-image:linear-gradient(to_right,#ffffff00,#fff_40px)] duration-200 ease-[ease] transition-[opacity_visibilty_transform]"
        >
          <div className="w-[28px] h-[28px] bg-white rounded-full hover:scale-[1.04] border-[.5px] border-[rgba(0,0,0,.3)] flex items-center justify-center">
            <img
              src={require("../../assets/svgs/arrow-right.svg").default}
              className="w-3 h-3 rotate-180"
              alt="Arrow Right"
            />
          </div>
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center justify-end flex-shrink-0">
        <button className="h-12 px-4 py-[7px] text-[.75rem] font-semibold flex items-center gap-x-2 border border-light-grey rounded-xl">
          <img
            src={require("../../assets/svgs/filters.svg").default}
            alt="Filters"
          />
          Filtreler
        </button>
      </div>
    </div>
  );
};

export default Categories;
