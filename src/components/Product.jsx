import React, { useState } from "react";
import Slider from "./Slider";

import { ReactComponent as Heart } from "../assets/svgs/heart.svg";
import { ReactComponent as Star } from "../assets/svgs/star.svg";

const Product = (props) => {
  const [page, setPage] = useState(1);

  const { title, images, country, starRate, address, dayRange, price, time } =
    props;

  return (
    <div className="relative flex flex-col cursor-pointer">
      <div className="relative rounded-xl overflow-hidden">
        <Slider page={page} setPage={setPage}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="housing"
              className="w-full aspect-[20/19] object-cover"
            />
          ))}
        </Slider>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-x-[5px]">
          {[...Array(5).keys()].map((key, index) => (
            <span
              key={index}
              data-selected={page === key + 1}
              className="w-[6px] h-[6px] bg-white opacity-[.6] data-[selected=true]:opacity-100 rounded-full"
            />
          ))}
        </div>
      </div>

      <button className="w-6 h-6 absolute top-4 right-4 active:scale-[.92]">
        <Heart />
      </button>

      <div className="grid grid-cols-[minmax(0,1fr),max-content] gap-[2px_8px] mt-3 text-[.9375rem] leading-[19px]">
        <div className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {title}, {country}
        </div>
        {starRate && (
          <div className="flex items-center gap-x-1">
            <Star />
            {starRate}
          </div>
        )}
        <div className="text-[#717171] col-span-2">{address}</div>
        <div className="text-[#717171] col-span-2">{dayRange}</div>
        <div className="mt-[6px] col-span-2">
          <span className="font-semibold">{price} ₺</span> {time}
        </div>
      </div>
    </div>
  );
};

export default Product;
