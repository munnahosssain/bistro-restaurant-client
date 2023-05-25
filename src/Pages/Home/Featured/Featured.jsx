import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="my-12 bg-fixed featured-img lg:mx-24">
      <SectionTitle heading="Check it Out" subHeading="Featured Items" />
      <div className="md:flex items-center justify-center pt-8 pb-20 lg:px-36">
        <div>
          <img className="rounded-xl" src={featuredImg} alt="featuredImg" />
        </div>
        <div className="m-4 text-white">
          <p>{new Date().getFullYear()}</p>
          <p className="uppercase">Where can i get sum</p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            facilis itaque possimus ratione eos quisquam unde suscipit harum et
            illo! Recusandae, autem, nam repudiandae voluptatibus aperiam quod
            soluta alias, ad sapiente tempore asperiores. Illum, reiciendis
            dicta a molestias voluptas, accusamus aliquam qui quis deserunt
            facilis fuga quae maiores rem autem.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
