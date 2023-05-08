import React from 'react';
import Slider from '../Slider/Slider';
import AllProducts from '../AllProducts/AllProducts';
import Brands from '../Brands/Brands';
import Newsletter from '../Newsletter/Newsletter';
import AllCategory from '../AllCategory/AllCategory';
import useTitle from '../../../hooks/useTitle';
import AdvertiseProduct from '../AdvertiseProduct/AdvertiseProduct';
import LowBudgetLaptop from '../LowBudgetLaptop/LowBudgetLaptop';
import CustomerReview from '../CustomerReview/CustomerReview';
import TrendingProducts from '../TrendingProducts/TrendingProducts';
import ContactUs from '../ContactUs/ContactUs';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import OurPartners from '../OurPartners/OurPartners';

const Home = () => {
    useTitle("Home")
    return (
        <>
            <Slider></Slider>
            <TrendingProducts></TrendingProducts>
            <OurPartners></OurPartners>
            <LowBudgetLaptop></LowBudgetLaptop>
            <AdvertiseProduct></AdvertiseProduct>
            <Brands></Brands>
            <AllCategory></AllCategory>
            <AllProducts></AllProducts>
            <CustomerReview></CustomerReview>
            <Newsletter></Newsletter>
            <ContactUs></ContactUs>
            <WhyChooseUs></WhyChooseUs>


        </>
    );
};

export default Home;