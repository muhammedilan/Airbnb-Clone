import React from "react";
import Products from "./Products";
import Categories from "./Categories";

import { ReactComponent as Map } from "../../assets/svgs/map.svg";
import { ReactComponent as World } from "../../assets/svgs/world.svg";
import { ReactComponent as ArrowUp } from "../../assets/svgs/arrow-up.svg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Categories />
      <Products />

      <button className="hidden md:flex items-center fixed bottom-[88px] left-1/2 -translate-x-1/2 p-[14px_19px] text-white leading-[18px] gap-x-2 border border-[#00000014] bg-[#222] rounded-3xl">
        Haritayı göster
        <Map />
      </button>

      <div className="bg-white hidden md:flex justify-between w-full fixed bottom-0 pt-[13px] pb-[14px] px-10 2xl:px-20 leading-[18px]">
        <div className="flex flex-wrap">
          <div>© {new Date().getFullYear()} Airbnb, Inc.</div>
          {["Gizlilik", "Şartlar", "Site Haritası"].map((text, index) => (
            <div key={index}>
              <span className="inline-block w-[19px] text-center">·</span>
              <Link className="hover:underline">{text}</Link>
            </div>
          ))}
        </div>

        <div className="flex gap-x-6 flex-shrink-0">
          <div className="flex items-center gap-x-2">
            <World />
            <Link className="hover:underline">Türkçe (TR)</Link>
          </div>
          <div className="flex items-center gap-x-2">
            ₺<Link className="hover:underline">TRY</Link>
          </div>
          <div className="flex items-center gap-x-2">
            <Link className="hover:underline">Destek ve kaynaklar</Link>
            <ArrowUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
