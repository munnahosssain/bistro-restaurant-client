import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/home/slide1.jpg";
import image2 from "../../../assets/home/slide2.jpg";
import image3 from "../../../assets/home/slide3.jpg";
import image4 from "../../../assets/home/slide4.jpg";
import image5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="lg:mx-48">
      <SectionTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper my-12"
      >
        <SwiperSlide className="text-center">
          <img src={image1} alt="image1" />
          <h3 className="uppercase text-white text-2xl font-bold -mt-16">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="image2" />
          <h3 className="uppercase text-center text-white text-2xl font-bold -mt-16">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="image3" />
          <h3 className="uppercase text-center text-white text-2xl font-bold -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="image4" />
          <h3 className="uppercase text-center text-white text-2xl font-bold -mt-16">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="image5" />
          <h3 className="uppercase text-center text-white text-2xl font-bold -mt-16">
            Salad
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
