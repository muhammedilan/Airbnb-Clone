import React, { useRef, useState } from "react";
import { ReactComponent as ArrowRight } from "../assets/svgs/arrow-right.svg";

const Slider = ({ children, className }) => {
  const [page, setPage] = useState(1);
  const slider = useRef();
  const prevButton = useRef();
  const nextButton = useRef();

  function handleClickNext() {
    const clientWidth = slider.current.clientWidth;
    const limit =
      page == Math.floor(slider.current.scrollWidth / clientWidth) - 1;
    prevButton.current.classList.remove("hidden");
    limit
      ? nextButton.current.classList.add("!hidden")
      : nextButton.current.classList.add("!flex");

    slider.current.scrollTo(clientWidth * page, 0);
    setPage(page + 1);
  }

  function handleClickPrev() {
    const clientWidth = slider.current.clientWidth;
    const scrollLeft = slider.current.scrollLeft;
    const limit = page == 2;

    limit
      ? nextButton.current.classList.remove("!flex")
      : nextButton.current.classList.remove("!hidden");
    limit && prevButton.current.classList.add("hidden");

    slider.current.scrollTo(scrollLeft - clientWidth, 0);
    setPage(page - 1);
  }

  return (
    <div
      onMouseEnter={() => nextButton.current.classList.remove("hidden")}
      onMouseLeave={() => nextButton.current.classList.add("hidden")}
      className="relative"
    >
      <button
        ref={prevButton}
        onClick={handleClickPrev}
        className="w-8 h-8 bg-[rgba(255,255,255,.9)] hidden flex items-center justify-center rounded-full absolute left-3 top-1/2 -translate-y-1/2 hover:scale-[1.04] hover:bg-white border border-[rgba(0,0,0,.08)] shadow-[0_0_0_1px_transparent,0_0_0_4px_transparent,0_2px_4px_rgba(0,0,0,0.18)] z-10"
      >
        <ArrowRight strokeWidth={4} className="rotate-180" />
      </button>
      <div
        ref={slider}
        className={
          `flex overflow-x-scroll scroll-hidden whitespace-nowrap ` + className
        }
      >
        {children}
      </div>

      <button
        ref={nextButton}
        onClick={handleClickNext}
        className="w-8 h-8 bg-[rgba(255,255,255,.9)] hidden flex items-center justify-center rounded-full absolute right-3 top-1/2 -translate-y-1/2 hover:scale-[1.04] hover:bg-white border border-[rgba(0,0,0,.08)] shadow-[0_0_0_1px_transparent,0_0_0_4px_transparent,0_2px_4px_rgba(0,0,0,0.18)] z-10"
      >
        <ArrowRight strokeWidth={4} />
      </button>
    </div>
  );
};

export default Slider;
