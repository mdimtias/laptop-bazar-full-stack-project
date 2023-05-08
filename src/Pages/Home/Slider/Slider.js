import React from "react";
import { Link } from "react-router-dom";
import './Slider.css'
import SliderOne from "./../../../assets/Slider/slider-1.jpg"
import SliderTwo from "./../../../assets/Slider/slider-2.jpg"
const Slider = () => {
  return (
    <div className="carousel w-full slider-shadow">
    <div id="slide1" className="carousel-item relative w-full">
      <div className="carousel-img w-full relative">
      <div className="absolute inset-0 bg-[#0A2284] bg-opacity-80"></div>
          <img src={SliderOne} className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Save 50% Off On    <br />
          Hp Laptop<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>We strive to engineer experiences that amaze, delight and inspire.</p>
         <div className="text-left ml-20"> <Link to="/brand/Hp"><button className="btn btn-dark mt-5 bg-[#035ded] hover:bg-[#004bc3] border border-[#035ded] hover:border-[#004bc3] py-3 px-7">Shop Now</button></Link></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-1 sm:left-5 right-1 sm:right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
          <div className="absolute inset-0 bg-[#0A2284] bg-opacity-80"></div>
          <img src={SliderTwo} className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Asus multinational computer hardware  <br />
          and electronics company<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>ASUS has an unyielding commitment to innovation and quality, a fact borne out by its corporate slogan</p>
         <div className="text-left ml-20"> <Link to="/brand/Asus"><button className="btn btn-success text-white mt-5 bg-[#035ded] hover:bg-[#004bc3] border border-[#035ded] hover:border-[#004bc3] py-3 px-7">Shop Now</button></Link></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
          <div className="absolute inset-0 bg-[#0A2284] bg-opacity-80"></div>
          <img src="https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Innovation that stops   <br />
          at nothing<br />
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>Shop the latest Dell computers & technology solutions.</p>
         <div className="text-left ml-20"> <Link to="/brand/Dell"><button className="btn btn-primary mt-5 bg-[#035ded] hover:bg-[#004bc3] border border-[#035ded] hover:border-[#004bc3] py-3 px-7">Shop Now</button></Link></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
    <div className="carousel-img w-full">
          <div className="absolute inset-0 bg-[#0A2284] bg-opacity-80"></div>
          <img src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270__340.jpg" className="w-full" alt="home" />
      </div>
      <div className="absolute flex flex-col justify-end transform -translate-y-1/2 top-1/2">
          <h1 className='text-5xl text-left ml-20 lg:text-6xl font-bold text-white'>
          Shop Our Collection of <br/>Stylish Laptops
          </h1>
          <p className='text-xl text-left ml-20 text-white pt-6 w-9/12'>Upgrade your productivity with our latest selection of laptops. Shop now and experience the ultimate computing experience!</p>
         <div className="text-left ml-20"> <button className="btn btn-primary mt-5 bg-[#035ded] hover:bg-[#004bc3] border border-[#035ded] hover:border-[#004bc3] py-3 px-7">Read More</button></div>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  );
};

export default Slider;

