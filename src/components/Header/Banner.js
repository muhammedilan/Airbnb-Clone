import React, { useState } from "react";
import close from "../../assets/svgs/close.svg";

const Banner = () => {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className="hidden md:block bg-[#f7f7f7] shadow-[inset_0px_-1px_0px_rgba(0,0,0,0.06)]">
      <div className="h-16 flex items-center justify-center text-center text-[1rem] font-semibold padding-container">
        Toplam fiyatı önceden göster
        <button
          onClick={() => toggleOpen()}
          className="p-2 underline active:scale-[0.94]"
        >
          <span>Daha fazla bilgi edinin</span>
        </button>
      </div>

      {/* Popup */}
        <div
          className={
            "w-screen h-screen bg-black bg-opacity-60 absolute left-0 top-0 hidden md:flex items-center justify-center transition-[opacity] duration-400 " +
            (open ? "opacity-100" : "opacity-0 invisible")
          }
        >
          <div className="flex flex-col xl:flex-row h-[742px] max-w-[696px] xl:h-[543.08px] 2xl:h-[645.95px] xl:min-w-[908px] 2xl:min-w-[1080px] bg-white rounded-xl relative overflow-hidden">
            {/* Close Icon */}
            <button
              onClick={() => toggleOpen()}
              className="w-8 h-8 flex items-center justify-center absolute top-4 left-4"
            >
              <img width={16} height={16} src={close} alt="Close" />
            </button>
            <div className="xl:w-1/2 p-[40px_160px] xl:p-[54px_32px_39px_52px] order-1 xl:-order-1 flex items-center justify-center">
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  width={272}
                  src={require("../../assets/images/early-access.webp")}
                  alt="Erken erişim"
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
                srcSet={require("../../assets/images/airbnb-preview-mobile.webp")}
              />
              <img
                src={require("../../assets/images/airbnb-preview-laptop.webp")}
                alt="Airbnb Preview"
              />
            </picture>
          </div>
        </div>
    </div>
  );
};

export default Banner;
