import React, { useState } from "react";
import { ReactComponent as Close } from "../assets/svgs/close.svg";

const Banner = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:block bg-[#f7f7f7] shadow-[inset_0px_-1px_0px_rgba(0,0,0,0.06)] padding-container z-30">
      <div className="h-16 flex items-center justify-center text-center text-[1rem] font-semibold">
        Toplam fiyatı önceden göster
        <button
          onClick={() => setOpen(true)}
          className="p-2 underline active:scale-[0.94]"
        >
          <span>Daha fazla bilgi edinin</span>
        </button>
      </div>

      {/* Popup */}
      <div
        className={
          "w-full h-full bg-black bg-opacity-60 fixed left-0 top-0 md:flex items-center justify-center transition-[opacity] duration-400 " +
          (open ? "opacity-100" : "opacity-0 invisible")
        }
      >
        <div className="flex flex-col xl:flex-row h-[742px] max-w-[696px] xl:h-[543.08px] 2xl:h-[645.95px] xl:min-w-[908px] 2xl:min-w-[1080px] bg-white rounded-xl relative overflow-hidden">
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center absolute top-4 left-4"
          >
            <Close />
          </button>

          <div className="xl:w-1/2 p-[40px_160px] xl:p-[54px_30px_32px_40px] 2xl:p-[54px_32px_39px_52px] order-1 xl:-order-1 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center text-center">
              <img
                src="https://a0.muscache.com/im/pictures/995cd7da-9315-4529-b1c8-ebe2b1a05d6b.jpg?im_q=highq&im_w=1200"
                alt="Erken erişim"
                width={272}
              />
              <h1 className="text-[2.5rem] xl:text-[3rem] 2xl:text-[3.75rem] mt-4 xl:mt-[30px] mb-[6px] xl:mb-4 font-extrabold tracking-[-0.03em] 2xl:tracking-[-0.02em] leading-10 xl:leading-[50px] 2xl:leading-[66px]">
                Toplam fiyatı önceden görün
              </h1>
              <p className="max-w-[271.08px] 2xl:max-w-[338.84px] leading-5 2xl:leading-[26px] mb-10 xl:mb-8 text-[1rem] 2xl:text-[1.25rem] font-light">
                Artık tüm ücretler dâhil, vergiler hariç toplam fiyatı önceden
                görebilirsiniz.
              </p>
              <button className="w-full xl:w-[168.64px] 2xl:w-[181.73px] h-[44px] xl:h-[52px] 2xl:h-[54px] bg-dark-grey rounded-md text-[#f7f7f7] text-[.875rem] xl:text-[1rem] 2xl:text-[1.125rem] font-medium xl:font-semibold">
                Şimdi deneyin
              </button>
              <div
                onClick={() => setOpen(false)}
                className="w-full xl:w-auto mt-4 underline underline-offset-2 font-medium xl:font-semibold text-[.875rem] xl:text-[1rem] 2xl:text-[1.125rem] cursor-pointer active:scale-[.94] xl:px-[23.525px]"
              >
                Belki daha sonra
              </div>
            </div>
          </div>
          <picture className="xl:w-1/2">
            <source
              media="(max-width:1127px)"
              srcSet="https://a0.muscache.com/im/pictures/64150cc4-574d-408a-83c0-e28e63bc2219.jpg?im_w=720"
            />
            <img
              src="https://a0.muscache.com/im/pictures/752d2d89-d04b-44b8-af31-d078d8c5dbbe.jpg?im_w=1200"
              alt="Airbnb Preview"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Banner;
