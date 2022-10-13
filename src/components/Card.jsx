import React from "react";

const Card = ({ data }) => {
  const { bg, reverse, src, text, title } = data;
  return (
    <div className="relative">
      <div>
        {bg === "top" && (
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/bg-section-top-desktop-1.svg"
            />
            <img
              className="w-full"
              src={`/images/bg-section-top-mobile-1.svg`}
              alt=""
            />
          </picture>
        )}
        {bg === "bottom" && (
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/bg-section-top-desktop-2.svg"
            />
            <img
              className="w-full"
              src={`/images/bg-section-top-mobile-2.svg`}
              alt=""
            />
          </picture>
        )}
      </div>

      <figure
        className={` relative z-10 flex  text-center md:text-start flex-col-reverse md:flex-row ${
          reverse ? "md:flex-row-reverse flex-col " : "bg-[#F6FBFF]"
        } justify-between items-center lg:px-20 px-8  md:h-[500px] py-8 md:py-0 h-auto`}
      >
        <div className=" space-y-8 relative z-10">
          <h1 className="font-Heading text-3xl">{title}</h1>
          <p className="max-w-[500px] text-xl">{text}</p>
        </div>
        <div className="h-full mb-24 md:mb-0">
          <img className="md:h-full w-auto object-contain" src={src} alt="" />
        </div>
      </figure>
      <div className="">
        {bg === "top" && (
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/bg-section-bottom-desktop-1.svg"
            />
            <img
              className="w-full"
              src={`/images/bg-section-bottom-mobile-1.svg`}
              alt=""
            />
          </picture>
        )}
        {bg === "bottom" && (
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/bg-section-bottom-desktop-2.svg"
            />
            <img
              className="w-full"
              src={`/images/bg-section-bottom-mobile-2.svg`}
              alt=""
            />
          </picture>
        )}
      </div>
    </div>
  );
};

export default Card;
