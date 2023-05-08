import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../../SharedPage/Loading/Loading';
import Product from '../Product/Product';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import {Navigation, Autoplay, FreeMode, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import "./AdvertiseProduct.css";
const AdvertiseProduct = () => {
    const [bookingModalData, setBookingModalData] = useState(null);
    const { data: product = [], isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/product-advertise`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });
      if(isLoading){
        return <Loading></Loading>
      }
      if(product.success === false){
        return <div>Data Not Found, Please try Again</div>
      }
    return (
        <section className="advertise-products pt-7 pb-10">
          <div className='container mx-auto px-5'>
        <h2 className='font-bold text-3xl py-5'>Advertise Product</h2>
     {/* <div className="grid gap-5 mx-0 grid-cols-1 px-5 md:grid-cols-2 lg:px-0 lg:grid-cols-3 xl:grid-cols-4"> */}
     <Swiper
        slidesPerView={4}
        spaceBetween={28}
        freeMode={true}
        navigation= {{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        speed={1200}
        pagination={{
          clickable: true,
        }}
        modules={[ Navigation, Autoplay, FreeMode, Pagination]}
        breakpoints={{
            200: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        className="mySwiper"
      >
         
         {
            product?.data?.map((product)=>
            <SwiperSlide key={product._id}><Product key={product._id} product={product}  setBookingModalData={setBookingModalData}></Product></SwiperSlide>
             )
         }
         {
            product?.data?.map((product)=>
            <SwiperSlide key={product._id}><Product key={product._id} product={product}  setBookingModalData={setBookingModalData}></Product></SwiperSlide>
             )
         }
           <div className="swiper-button-next"></div>
           <div className="swiper-button-prev"></div>
         </Swiper>
     {/* </div> */}
    {
      bookingModalData && 
      <BookingModal
      bookingModalData={bookingModalData}
      setBookingModalData={setBookingModalData}
      ></BookingModal>
    }
        </div>
        </section>
    );
};

export default AdvertiseProduct;