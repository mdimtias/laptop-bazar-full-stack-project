import React from 'react';
import { Link } from 'react-router-dom';
import Asus from "../../../assets/brand/asus.png";
import Dell from "../../../assets/brand/dell.png";
import Hp from "../../../assets/brand/hp.png";

const Brand = () => {
    return (
        <>
        <div className='brand flex justify-between items-center p-6 bg-gradient-to-r from-[rgba(68,89,237,1)] via-[rgba(133,97,234,1)] to-[rgba(170,101,230,1)]'>
            <div className="brand-text">
                <h2 className='mb-5 text-white'>Dell is a multinational tech company that develops, sells, repairs, and supports computers</h2>
                <Link to="brand/Dell"><button className="text-sm font-bold py-2 px-5 text-[#3BB77E] bg-[#DEF9EC] rounded-md hover:text-white hover:bg-[#0A2284]">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src={Dell} alt="Dell" className="w-24 h-auto" />
            </div>
        </div>
        <div className='brand flex justify-between items-center p-6 bg-gradient-to-r from-[rgba(68,89,237,1)] via-[rgba(133,97,234,1)] to-[rgba(170,101,230,1)]'>
            <div className="brand-text">
                <h2 className='mb-5 text-white'>ASUS is the world's No. 1 motherboard and gaming brand as well as a top-three consumer notebook vendor.</h2>
                <Link to="brand/Asus"><button className="text-sm font-bold py-2 px-5 text-[#3BB77E] bg-[#DEF9EC] rounded-md hover:text-white hover:bg-[#0A2284]">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src={Asus} alt="Asus" className="w-24 h-auto" />
            </div>
        </div>
        <div className='brand flex justify-between items-center p-6 bg-gradient-to-r from-[rgba(68,89,237,1)] via-[rgba(133,97,234,1)] to-[rgba(170,101,230,1)]'>
            <div className="brand-text">
                <h2 className='mb-5 text-white'>HP Inc. is an information technology company best known for its personal computers and printers.</h2>
                <Link to="brand/Hp"><button className="text-sm font-bold py-2 px-5 text-[#3BB77E] bg-[#DEF9EC] rounded-md hover:text-white hover:bg-[#0A2284]">Shop Now</button></Link>
            </div>
            <div className="brand-img">
                <img src={Hp} alt="Hp" className="w-24 h-auto" />
            </div>
        </div>
        </>
    );
};

export default Brand;