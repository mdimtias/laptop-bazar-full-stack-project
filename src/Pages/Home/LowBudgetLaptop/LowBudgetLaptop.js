import React from 'react';

const LowBudgetLaptop = () => {
    return (
        <section className="low-budget-laptop bg-gradient-to-r from-[rgba(2,0,36,1)] via-[rgba(6,26,118,1)] to-[rgba(30,98,173,1)] py-20">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 justify-center items-center">
                    <div className="low-budget">
                        <h1 className='text-3xl font-bold text-white mb-5'>Customize Your High-Performance Laptop on a Low Budget</h1>
                        <p className="text-white font-xl mb-5">Build your own high-performance laptop with our low-budget customization options, <br /> and experience unparalleled performance for work or play.</p>
                        <button className="py-3 px-6 bg-white font-bold rounded-lg text-[#0073ec] hover:bg-[#172B87] hover:text-white transition-all duration-500">Purchase Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LowBudgetLaptop;