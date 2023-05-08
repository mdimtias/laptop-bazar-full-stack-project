import React from 'react';
import Adidas from "../../../assets/partners/adidas.png";
import Amazon from "../../../assets/partners/amazon.png";
import Apple from "../../../assets/partners/apple.png";
import Bmw from "../../../assets/partners/bmw.png";
import Ebay from "../../../assets/partners/ebay.png";
import Facebook from "../../../assets/partners/facebook.png";
import Hp from "../../../assets/partners/hp.png";
import Ibm from "../../../assets/partners/ibm.png";
import Intel from "../../../assets/partners/intel.png";
import MasterCard from "../../../assets/partners/mastercard.png";
import Microsoft from "../../../assets/partners/microsoft.png";
import Nike from "../../../assets/partners/nike.png";
import Nokia from "../../../assets/partners/nokia.jpg";
import Pepsi from "../../../assets/partners/pepsi.png";
import Samsung from "../../../assets/partners/Samsung.png";
import Toyota from "../../../assets/partners/toyota.png";
import FritoLay from "../../../assets/partners/frito-lay.png";
import Fox from "../../../assets/partners/fox.png";
import Lg from "../../../assets/partners/lg.png";
import Pampers from "../../../assets/partners/pampers.png";
import Yahoo from "../../../assets/partners/yahoo.png";
import LoweS from "../../../assets/partners/loweS.png";
import Visa from "../../../assets/partners/visa.png";
const OurPartners = () => {
    return (
        <section className="partners-section py-10">
            <div className="container mx-auto">
            <h2 className="font-bold text-2xl text-center pb-5">Our Partners</h2>
            <div className="container mx-auto px-5">
                <div className="flex flex-wrap gap-5 items-center justify-center">
                    <img src={Samsung} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Adidas} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Amazon} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Bmw} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Ebay} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Facebook} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Apple} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Hp} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Ibm} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Intel} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={MasterCard} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Toyota} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Microsoft} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Pepsi} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Nokia} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Nike} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={FritoLay} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Lg} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Fox} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Pampers} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Yahoo} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={LoweS} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                    <img src={Visa} alt="" className="w-20 h-20 opacity-50 hover:opacity-100"/>
                </div>
            </div>
            </div>
        </section>
    );
};

export default OurPartners;