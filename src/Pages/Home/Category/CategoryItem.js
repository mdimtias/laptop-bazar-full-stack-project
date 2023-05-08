import React from 'react';
import {Link} from "react-router-dom";
// import "./Category.css";

const CategoryItem = ({name, logo, totalProduct, id}) => {
    return (
       
         <div className='single-category w-28 flex flex-col justify-between items-center'>
            <Link to={`category/${id}`}>
            <div className="single-category-img h-20">
                <img className="w-full h-full object-contain" src={logo} alt="" />
            </div>
            <div className="single-category-text bg-[#ECFFEC] h-24 px-1 py-2 flex flex-col justify-start">
                <h2 className="single-category-name font-bold text-base">{name}</h2>
                <p className="total-items text-sm text-gray-400">{totalProduct} items</p>
            </div>
            
       </Link>
        </div>
    );
};

export default CategoryItem;