import React from "react";
import { Link } from "react-router-dom";
import Payment from "./../../../assets/footer/payment.png";
import PlayStore from "./../../../assets/footer/google-play.jpg";
import AppStore from "./../../../assets/footer/app-store.jpg";
const Footer = () => {
  return (
    <>
      <footer className="footer-section bg-black">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 py-8">
            <div className="contact-details">
              <div className="brand-text pb-4">
                <h2 className="text-white text-xl text-left">Laptop Bazar</h2>
              </div>
              <div className="contact-in">
                <div className="phone flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    (+612) 2531 5600
                  </p>
                </div>
                <div className="email flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    name@domain.com
                  </p>
                </div>
                <div className="email flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    ></path>
                  </svg>
                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    1579 Freedom, New York United States
                  </p>
                </div>
                <div className="email flex gap-5 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#e5e5e5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left">
                    Opening Hours : 8.00AM - 21.00AM
                  </p>
                </div>
              </div>
              <div className="social-media flex flex-wrap gap-2">
                <div className="facebook bg-[#242424] hover:bg-[#0C86EF] rounded-full  hover:cursor-pointer w-12 h-12 flex justify-center items-center">
                  <Link to="/">
                    {" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="30px"
                      width="30px"
                      className="text-white"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                    </svg>
                  </Link>
                </div>
                <div className="twitter bg-[#242424] hover:bg-[#1DA1F2] rounded-full  hover:cursor-pointer w-12 h-12 flex justify-center items-center">
                  <Link to="/">
                    <svg
                      viewBox="0 0 920 1000"
                      fill="currentColor"
                      height="30px"
                      width="30px"
                      className="text-white"
                    >
                      <path d="M920 214c-24 36-55.333 68.667-94 98v24c0 86.667-20 170-60 250S664 733.667 580 789s-180.667 83-290 83c-106.667 0-203.333-28-290-84 9.333 1.333 24.667 2 46 2 88 0 166-26.667 234-80-41.333-1.333-78-14-110-38s-54-55.333-66-94c6.667 2.667 18 4 34 4 17.333 0 34-2 50-6-44-9.333-80-31.333-108-66s-42-74.667-42-120v-2c24 13.333 52 21.333 84 24-56-38.667-84-91.333-84-158 0-32 8.667-63.333 26-94 102.667 125.333 232.667 190.667 390 196-4-12-6-26-6-42 0-52 18.333-96.333 55-133s81.667-55 135-55c54.667 0 100 19.333 136 58 40-8 80-22.667 120-44-13.333 44-40.667 78.667-82 104 37.333-5.333 73.333-15.333 108-30" />
                    </svg>
                  </Link>
                </div>
                <div className="pinterest bg-[#242424] hover:bg-[#B7081B] rounded-full  hover:cursor-pointer w-12 h-12 flex justify-center items-center">
                  <svg
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    height="30px"
                    width="30px"
                    className="text-white"
                  >
                    <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                  </svg>
                </div>
                <div className="instagram bg-[#242424] hover:bg-[#9808EF] rounded-full  hover:cursor-pointer w-12 h-12 flex justify-center items-center">
                  <Link to="/">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="30px"
                      width="30px"
                      className="text-white"
                    >
                      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                    </svg>
                  </Link>
                </div>
                <div className="youtube bg-[#242424] hover:bg-[#FF0101] rounded-full  hover:cursor-pointer w-12 h-12 flex justify-center items-center">
                  <Link to="/">
                    {" "}
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="30px"
                      width="30px"
                      className="text-white"
                    >
                      <path d="M960 509.2c0-2.2 0-4.7-.1-7.6-.1-8.1-.3-17.2-.5-26.9-.8-27.9-2.2-55.7-4.4-81.9-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 00-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2-37.1-1.4-76.8-2.3-116.5-2.8-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4-39.7.5-79.4 1.4-116.5 2.8-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0082.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9-.3 9.7-.4 18.8-.5 26.9 0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6.1 8.1.3 17.2.5 26.9.8 27.9 2.2 55.7 4.4 81.9 3 36.1 7.4 66.2 13.4 88.8 12.8 47.9 50.4 85.7 98.3 98.5 28.2 7.6 83.7 12.3 161.7 15.2 37.1 1.4 76.8 2.3 116.5 2.8 13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4 39.7-.5 79.4-1.4 116.5-2.8 78-3 133.5-7.7 161.7-15.2 47.9-12.8 85.5-50.5 98.3-98.5 6.1-22.6 10.4-52.7 13.4-88.8 2.2-26.2 3.6-54 4.4-81.9.3-9.7.4-18.8.5-26.9 0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1-.1 7.8-.3 16.4-.5 25.7-.7 26.6-2.1 53.2-4.2 77.9-2.7 32.2-6.5 58.6-11.2 76.3-6.2 23.1-24.4 41.4-47.4 47.5-21 5.6-73.9 10.1-145.8 12.8-36.4 1.4-75.6 2.3-114.7 2.8-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8-71.9-2.8-124.9-7.2-145.8-12.8-23-6.2-41.2-24.4-47.4-47.5-4.7-17.7-8.5-44.1-11.2-76.3-2.1-24.7-3.4-51.3-4.2-77.9-.3-9.3-.4-18-.5-25.7 0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1.1-7.8.3-16.4.5-25.7.7-26.6 2.1-53.2 4.2-77.9 2.7-32.2 6.5-58.6 11.2-76.3 6.2-23.1 24.4-41.4 47.4-47.5 21-5.6 73.9-10.1 145.8-12.8 36.4-1.4 75.6-2.3 114.7-2.8 13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8 71.9 2.8 124.9 7.2 145.8 12.8 23 6.2 41.2 24.4 47.4 47.5 4.7 17.7 8.5 44.1 11.2 76.3 2.1 24.7 3.4 51.3 4.2 77.9.3 9.3.4 18 .5 25.7 0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135-232-133z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="our-products">
              <div className="our-product-title pb-4">
                <h2 className="text-white text-xl text-left">Products</h2>
              </div>
              <div className="product-list">
                <ul className="text-left">
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Best Sales
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium text-"
                    >
                      Top Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Trending Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Special Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Featured Product
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      New Product
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="our-company">
              <div className="our-company-title pb-4">
                <h2 className="text-white text-xl text-left">Our Company</h2>
              </div>
              <div className="company-list">
                <ul className="text-left">
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium text-"
                    >
                      Sitemap
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      My Account
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Our Shop
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Investors
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="customer-service">
              <div className="customer-service-title pb-4">
                <h2 className="text-white text-xl text-left">
                  CUSTOMER SERVICE
                </h2>
              </div>
              <div className="customer-service-list">
                <ul className="text-left">
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Live Chat
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium text-"
                    >
                      Help and advice
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Shipping & Returns
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Terms and conditions
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-[#ededed] hover:pl-2 hover:text-[#3ED780] transition-all ease-in duration-300 text-left text-base font-medium"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="download-our-apps">
              <div className="download-apps-title mb-2">
                <h2 className="text-xl text-white text-left">
                  Download Our App
                </h2>
              </div>
              <div className="download-app-text">
                <p className="text-white text-medium mb-2 text-left">
                  Download our App and get extra 15% Discount on your first
                  Order..!
                </p>
              </div>
              <div className="download-link flex gap-5 items-center justify-center pt-5">
                <Link to="/">
                  <img src={AppStore} alt="App Store" />
                </Link>
                <Link to="/">
                  <img src={PlayStore} alt="App Store" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-section bg-black">
        <div className="container mx-auto">
          <div className="p-4 text-white flex flex-col md:flex-row justify-between items-center">
            <p className="mb-3 md:mb-0">
              &#169; 2023 Copyright   
              <Link to="/" className="font-bold text-green-400"> Laptop Bazar </Link>
               All Rights Reserved
            </p>
            <img src={Payment} alt="Payment" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
