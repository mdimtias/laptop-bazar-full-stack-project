import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loading from "../../SharedPage/Loading/Loading";
import Product from "../Product/Product";
import BookingModal from "../../BookingModal/BookingModal";
const AllProducts = () => {
    const [categoryId, setCategoryId] = useState("products");
    const [bookingModalData, setBookingModalData] = useState(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["product", categoryId],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/${categoryId}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });
if(categories.success === false){
  return <div className="text-center font-bold text-xl py-5">Data Load Fail</div>
}
  return (
    <section className="all-products py-10">
      <div className="container mx-auto px-5">
        <div className="category flex justify-between items-center">
          <h2 className="text-3xl font-bold py-5 text-left">
            Popular Products
          </h2>
          <div className="all-category">
            <ul className="flex gap-2 flex-wrap">
              {categories?.data?.map((category) => {
                return (
                //   <Link key={category._id} to={`category/${category.id}`}>
                    <li key={category._id}>
                      <button onClick={()=>setCategoryId(`category/${category.id}`)}>{category.name}</button>
                    </li>
                //   </Link>
                );
              })}
              <li> 
                 <button onClick={()=>setCategoryId("products")}>Popular</button>
              </li>
            </ul>
          </div>
        </div>
            {isLoading ? <Loading></Loading>: ""}
        <div className="grid gap-5 mx-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(typeof products?.data === 'object' && Array.isArray(products?.data)) && products?.data?.slice(0, 12).map((product) => (
            <Product key={product._id} product={product} setBookingModalData={setBookingModalData}></Product>
          ))}
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

export default AllProducts;
