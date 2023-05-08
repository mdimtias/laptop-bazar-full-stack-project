import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../SharedPage/Loading/Loading";

const MyWishlist = () => {
  useTitle("My Wishlist")
  const { user } = useContext(AuthContext);
  const {
    data: products = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/wishlist/${user?.email}`, {
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
  const handleDeleteWishlist = (wishlist) => {
    fetch(`${process.env.REACT_APP_API_URL}/wishlist/${wishlist.product_name}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success(
            `Successfully Delete Wishlist Product ${wishlist.product_name}`
          );
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Data Delete Fail");
      });
  };
  return (
    <div>
      <h2 className="text-3xl mb-5">My Wishlist</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SN</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Product Code</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {(products.length === 0 || products.data.length === 0) && <tr><td className="text-center text-bold text-xl py-5">You have no product wishlist</td></tr>}
            {products?.data?.map((product, i) => (
              <tr key={product._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={product?.image} alt="" className="w-[75px]" />
                </td>
                <td>{product?.product_name}</td>
                <td>{product?.categoryName}</td>
                <td>{product?.product_code}</td>
                <td>{product?.sale_price}</td>
                <td>
                  <button
                    className="btn btn-xs btn-danger"
                    onClick={() => handleDeleteWishlist(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyWishlist;
