import React, { useState } from "react";
import { categories } from "../../data";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="relative">
      {/* Arrow Left Button */}
      <div className="h-full absolute top-0 -left-3 opacity-0 flex items-center after:w-10 after:h-full [background-image:linear-gradient(to_left,#ffffff00,#fff_40px)] duration-200 ease-[ease] transition-[opacity_visibilty_transform]">
        <button className="w-[28px] h-[28px] bg-white rounded-full hover:scale-[1.04] border-[.5px] border-[rgba(0,0,0,.3)] flex items-center justify-center">
          <img
            src={require("../../assets/svgs/arrow-right.svg").default}
            className="w-3 h-3"
            alt="Arrow Left"
          />
        </button>
      </div>

      {/* Categories */}
      <div className="h-[78px] mt-[20px] flex gap-x-8 overflow-hidden whitespace-nowrap relative mr-8">
        {categories.map((category, index) => {
          const selected = index == selectedCategory;
          return (
            <div
              onClick={() => setSelectedCategory(index)}
              className="py-1 m-[10px_0px_12px] flex flex-col items-center rounded-md gap-y-2 relative group cursor-pointer"
            >
              <img
                alt="Navigation"
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
                className="w-full h-[2px] bg-[#ddd] absolute left-0 -bottom-3 hidden group-hover:block data-[selected=true]:bg-black data-[selected=true]:block"
              />
            </div>
          );
        })}
      </div>

      {/* Arrow Right Button */}
      <div
        onClick={() => handleClickNext()}
        className="h-full absolute top-0 -right-3 flex items-center before:w-10 before:h-full [background-image:linear-gradient(to_right,#ffffff00,#fff_40px)] duration-200 ease-[ease] transition-[opacity_visibilty_transform]"
      >
        <button className="w-[28px] h-[28px] bg-white rounded-full hover:scale-[1.04] border-[.5px] border-[rgba(0,0,0,.3)] flex items-center justify-center">
          <img
            src={require("../../assets/svgs/arrow-right.svg").default}
            className="w-3 h-3 rotate-180"
            alt="Arrow Right"
          />
        </button>
      </div>
    </div>
  );
};

export default Categories;
