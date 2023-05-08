import React from 'react';
import Brand from '../Brand/Brand';

const Brands = () => {
    return (
        <section className="brands-section py-10">
            <div className='container mx-auto px-5'>
             <h2 className='font-bold text-3xl pb-5'>Top Brands</h2>
            <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Brand></Brand>
            </div>
        </div>
        </section>
    );
};

export default Brands;