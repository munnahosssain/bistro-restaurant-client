import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ image, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={image}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero lg:h-[50rem]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="lg:mb-5 lg:text-5xl text-2xl font-bold uppercase">
              {title}
            </h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
