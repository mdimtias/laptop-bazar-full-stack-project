import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const MyProducts = () => {
  useTitle("MY Product")
    const {user} = useContext(AuthContext);
    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const res = await fetch(`${process.env.REACT_APP_API_URL}/products/${user?.email}`, {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          });
          const data = await res.json();
          return data;
        },
      });

      const handleAdvertise = async (product)=>{
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/adver/${product?._id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: localStorage.getItem("token"),
            } ,
            body: JSON.stringify({advertise: "yes"}),
          }
        );
        const data = await res.json();
        if(data.data.modifiedCount>0){
          toast.success("Advertise successful");
        }
        if (data.data.upsertedCount > 0) {
          toast.success("Advertise successful");
          return;
        }
    

      }
    return (
        <div>
        <h2 className="text-3xl mb-5">My Products</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SN</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Sales Status</th>
                <th>Price</th>
                <th>Advertise</th>
              </tr>
            </thead>
            <tbody>
              {products?.data?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td><img src={product?.image} alt="" className='w-[75px]' /></td>
                  <td>{product?.product_name}</td>
                  <td>{product?.categoryName}</td>
                  <td>{product?.stock > 0 ? "Available" : "Sold"}</td>
                  <td>${product?.sale_price}</td>
                  <td>{product?.stock > 0 ? <button onClick={()=>{handleAdvertise(product)}}>Advertise</button> : "Product Sold"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProducts;