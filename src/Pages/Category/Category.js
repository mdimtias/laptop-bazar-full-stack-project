import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Product from '../Home/Product/Product';
import Loading from '../SharedPage/Loading/Loading';

const Category = () => {
  const [bookingModalData, setBookingModalData] = useState(null);
    const {id} = useParams();
    const { data: category = [], isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/category/${id}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });
      if(isLoading){
        return <Loading></Loading>
      }

    return (
        <div className='container mx-auto py-10'>
            <h2 className='font-bold text-3xl py-5'>{category?.data[0]?.categoryName}</h2>
         <div className="grid gap-5 mx-0 grid-cols-1 px-5 md:grid-cols-2 lg:px-0 lg:grid-cols-3 xl:grid-cols-4">
             {
                category?.data?.map((product)=>
                <Product key={product._id} product={product}  setBookingModalData={setBookingModalData}></Product>
                 )
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
    );
};

export default Category;