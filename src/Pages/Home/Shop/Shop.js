import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../BookingModal/BookingModal";
import Loading from "../../SharedPage/Loading/Loading";
import NoProduct from "../../SharedPage/NoProduct/NoProduct";
import Product from "../Product/Product";

const Shop = () => {
  const [bookingModalData, setBookingModalData] = useState(null);
  const {
    data: products = [],
    isLoading
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products/`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  if(products?.data.length === 0){
    return <NoProduct></NoProduct>
  }
  return (
    <div className="container mx-auto py-10">
      <h2 className="font-bold text-3xl py-5">Shop</h2>
      <div className="grid gap-5 mx-0 grid-cols-1 px-5 md:grid-cols-2 lg:px-0 lg:grid-cols-3 xl:grid-cols-4">
        {(typeof products?.data === 'object' && Array.isArray(products?.data)) && products?.data?.map((product) => (
          <Product
            key={product._id}
            product={product}
            setBookingModalData={setBookingModalData}
          ></Product>
        ))}
      </div>
      {bookingModalData && (
        <BookingModal
          bookingModalData={bookingModalData}
          setBookingModalData={setBookingModalData}
        ></BookingModal>
      )}
    </div>
  );
};

export default Shop;
