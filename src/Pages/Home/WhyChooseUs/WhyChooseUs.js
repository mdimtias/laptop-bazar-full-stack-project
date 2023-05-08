import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="why-choose-card bg-[#f7f7f7] hover:bg-black flex group justify-center items-center py-7 gap-5 rounded-lg">
            <div className="why-choose-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <div className="why-choose-text">
              <h3 className="font-bold font-oswald text-xl text-left group-hover:text-[#4385F5]">
                FREE SHIPPING
              </h3>
              <p className="text-lg text-gray-400 group-hover:text-white">
                ON ALL ORDERS OVER $99.
              </p>
            </div>
          </div>
          <div className="why-choose-card bg-[#f7f7f7] hover:bg-black flex group justify-center items-center py-7 gap-5 rounded-lg">
            <div className="why-choose-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="why-choose-text">
              <h3 className="font-bold font-oswald text-xl text-left group-hover:text-[#4385F5]">
                CASH BACK OFFER
              </h3>
              <p className="text-lg text-gray-400 group-hover:text-white">
                WHEN YOU USE CREDIT CARD.
              </p>
            </div>
          </div>
          <div className="why-choose-card bg-[#f7f7f7] hover:bg-black flex group justify-center items-center py-7 gap-5 rounded-lg">
            <div className="why-choose-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </div>
            <div className="why-choose-text">
              <h3 className="font-bold font-oswald text-xl text-left group-hover:text-[#4385F5]">
                24/7 SUPPORT
              </h3>
              <p className="text-lg text-gray-400 group-hover:text-white uppercase">
                Fix Any Problem IN QUICKLY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
