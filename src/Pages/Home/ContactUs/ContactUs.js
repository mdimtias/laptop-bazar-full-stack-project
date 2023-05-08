import React from "react";

const ContactUs = () => {
  return (
    <section className="contact-us-section py-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="contact-us bg-white shadow-lg py-8">
            <h2 className="text-center text-2xl">Ask us anything here</h2>
            <form action="" className="contact-form py-5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10">
                <div className="">
                  <input
                    type="text"
                    className="border-slate-200 py-2 rounded-full w-full px-3 border border-solid focus:border-[#0A2284] outline-none text-[#666] bg-[#F8F8F8] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                    placeholder="Name *"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    className="border-slate-200 py-2 rounded-full w-full px-3 border border-solid focus:border-[#0A2284] outline-none text-[#666] bg-[#F8F8F8] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                    placeholder="Email *"
                  />
                </div>
                <div className="">
                  <input
                    type="number"
                    className="border-slate-200 py-2 rounded-full w-full px-3 border border-solid focus:border-[#0A2284] outline-none text-[#666] bg-[#F8F8F8] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                    placeholder="Phone *"
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    className="border-slate-200 py-2 rounded-full w-full px-3 border border-solid focus:border-[#0A2284] outline-none text-[#666] bg-[#F8F8F8] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                    placeholder="Address *"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    className="border-slate-200 py-2 rounded-full w-full px-3 border border-solid focus:border-[#0A2284] outline-none text-[#666] bg-[#F8F8F8] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                    placeholder="Subject *"
                  />
                </div>
              </div>
              <div className="mb-5 px-10 w-full">
                <textarea
                  className="h-32 border-slate-200 py-2 rounded-2xl w-full px-3 border border-solid focus:border-[#0A2284] outline-none text-[#666] bg-[#F8F8F8] placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
                  placeholder="Message *"
                />
              </div>
              <div className="px-10 text-left">
                <button className="font-bold rounded-full bg-[#0A2284] hover:bg-[#0a1e6e] py-3 px-10 text-white text-left">
                  Send Message
                </button>
              </div>
              {/* </div> */}
            </form>
          </div>
          <div className="contact-us-info flex flex-col justify-center py-8">
            <div className="call flex gap-5 items-center justify-start ml-5 md:ml-10 pb-5">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-[#0A2284]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
              </div>
              <div className="contact-text">
                <p className="text-md text-gray-400 text-left">Call for help now!</p>
                <h3 className="text-2xl font-bold">+91-765432185</h3>
              </div>
            </div>
            <div className="call flex gap-5 items-center justify-start ml-5 md:ml-10 pb-5">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-[#0A2284]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <div className="contact-text">
                <p className="text-md text-gray-400 text-left">Say Hello</p>
                <h3 className="text-2xl font-bold">info@website.com</h3>
              </div>
            </div>
            <div className="call flex gap-5 items-center justify-start ml-5 md:ml-10">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-[#0A2284]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div className="contact-text">
                <p className="text-md text-gray-400 text-left">Address</p>
                <h3 className="text-2xl font-bold text-left">
                  1579 Freedom, New York United States
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
