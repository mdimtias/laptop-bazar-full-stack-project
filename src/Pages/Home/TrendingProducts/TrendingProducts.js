import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Product from '../Product/Product';
import BookingModal from '../../BookingModal/BookingModal';
import Loading from '../../SharedPage/Loading/Loading';

const TrendingProducts = () => {
    const [bookingModalData, setBookingModalData] = useState(null);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <section className="trending-products pt-10 pb-14">
            <div className="container mx-auto px-5">
                <div className="trending-product-header">
                    <h2 className='font-bold text-3xl pb-8'>Trending Product</h2>
                </div>
                {isLoading ? <Loading></Loading> : ""}

                <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        (typeof products?.data === 'object' && Array.isArray(products?.data)) && products?.data && products?.data?.slice(19, 27).map(product => <Product key={product._id} product={product} setBookingModalData={setBookingModalData}></Product>)
                    }
                </div>
                {
                    bookingModalData &&
                    <BookingModal
                        bookingModalData={bookingModalData}
                        setBookingModalData={setBookingModalData}
                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default TrendingProducts;