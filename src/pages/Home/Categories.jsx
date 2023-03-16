import React, { useRef, useState } from "react";
import { categories } from "../../data";
import { ReactComponent as ArrowRight } from "../../assets/svgs/arrow-right.svg";

const Categories = () => {
  const [sliderPage, setSliderPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const slider = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  function handleClickPrevButton() {
    const sliderWidth = slider.current.clientWidth;
    const scrollLeft = slider.current.scrollLeft;
    const limit = sliderPage === 2;

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
    <div className="sticky bg-white top-[68px] md:top-20 md:mt-5 flex gap-x-6 z-10 shadow-[0_0_6px_#00000029] padding-container">
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
            <ArrowRight
              width="12"
              height="12"
              strokeWidth="5.33333px"
              className="rotate-180"
            />
          </div>
        </button>

        <div
          className="overflow-x-scroll scroll-hidden snap-mandatory flex whitespace-nowrap gap-x-8 duration-300"
          ref={slider}
        >
          {categories.map((category, index) => {
            const selected = index === selectedCategory;
            return (
              <div
                key={index}
                onClick={() => setSelectedCategory(index)}
                className="py-1 mt-3 mb-[10px] flex flex-col items-center rounded-md gap-y-1 md:gap-y-2 relative group cursor-pointer"
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
            <ArrowRight width="12" height="12" strokeWidth="5.33333px" />
          </div>
        </button>
      </div>

      {/* Filters */}
      <div className="hidden md:flex items-center justify-end flex-shrink-0">
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
