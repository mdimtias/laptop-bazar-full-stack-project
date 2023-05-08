import React from 'react';
import { Link } from 'react-router-dom';

const NoProduct = () => {
    return (
        <div className='py-5'>
            <h2 className="font-bold text-3xl py-5">No Product Found</h2>
            <Link to="/" className='py-5'><button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default NoProduct;