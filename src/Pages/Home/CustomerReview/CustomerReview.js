import React from "react";
import Star from "../../../assets/star/star.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./CustomerReview.css";
// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper";
import {data} from "./data";
const CustomerReview = () => {
  return (
    <section className="customer-review-section bg-[#F8F9FA] py-16">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 justify-center items-center">
       
          <div className="review-heading">
            <h2 className="text-3xl font-bold text-black mb-5">
              What Our Customers Say About Us?
            </h2>
            <p className="text-xl text-black mb-7 text-center mx-10 lg:mx-48">
            Our customers have spoken, and they love our laptop reselling website! With a wide selection of high-quality laptops from all the top brands, our customers can find the perfect computer to meet their needs.
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-3 justify-center items-center gap-8"> */}
        <Swiper
        slidesPerView={3}
        spaceBetween={28}
        freeMode={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        breakpoints={{
            200: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
          }}
        className="mySwiper"
      >
     {
      data.map(review=><SwiperSlide key={review.id}>
        <div className="customer-review bg-white p-5 rounded-xl">
          <div className="rating">
            <span className="flex">
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
              <img src={Star} alt="" />
            </span>
          </div>
          <div className="review-text h-auto">
            <h2 className="text-2xl font-bold text-black mb-5">
              {review.product_title}
            </h2>
            <p className="text-xl text-gray-500 text-left">
            {review.product_review}
            </p>
          </div>
          <div className="review-user-info flex justify-between items-center pt-5">
             <div className="flex gap-1 items-center"> 
             <img src={review.review_user.image} className="w-16" alt="" />
            <h3 className="text-xl font-normal text-black"> {review.review_user.name}</h3>
             </div>
            <p className="text-md text-gray-500 text-left"> {review.review_user.upload_date}</p>
          </div>
        </div>
       </SwiperSlide>)
     }      
          </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
};

export default CustomerReview;
