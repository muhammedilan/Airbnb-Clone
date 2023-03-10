import React from "react";

const Product = (props) => {
  const {
    title,
    image,
    country,
    starRate,
    address,
    dayRange,
    day,
    price,
    time,
  } = props;

  return (
    <div className="relative flex flex-col cursor-pointer">
      <img src={image} alt="housing" className="flex-1  object-cover rounded-xl" />

      <button className="w-6 h-6 absolute top-4 right-4">
        <img src={require("../assets/svgs/heart.svg").default} alt="Heart" />
      </button>

      <div className="grid grid-cols-[minmax(0,1fr),max-content] gap-[2px_8px] mt-3 text-[.9375rem] leading-[19px]">
        <div className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {title}, {country}
        </div>
        <div className="flex items-center gap-x-1">
          <img src={require("../assets/svgs/star.svg").default} alt="Star" />
          {starRate || "Yeni"}
        </div>
        <div className="text-[#717171] col-span-2">{address}</div>
        <div className="text-[#717171] col-span-2">
          {dayRange} {day.slice(0, 3)}
        </div>
        <div className="mt-[6px] col-span-2">
          <span className="font-semibold">{price} ₺</span> {time}
        </div>
      </div>
    </div>
  );
};

export default Product;
