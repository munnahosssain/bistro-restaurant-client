import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRatings from "react-star-ratings";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="lg:mx-24 my-12">
      <SectionTitle subHeading="What Our Clients Say" heading="TESTIMONIALS" />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="text-center">
              <StarRatings
                rating={review.rating}
                starRatedColor="green"
                numberOfStars={5}
                name="rating"
              />
              <p className="lg:px-96">{review.details}</p>
              <h2 className="text-3xl text-orange-500 fon-bold my-4">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
