import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Product.css";
import Star from "../../../assets/star/star.png";

const Product = ({ product, setBookingModalData }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleWishlist = async (e) => {
    e.preventDefault();
    if (!user) {
      return navigate("/login");
    }
    let product_id = product._id;
    console.log(product_id)
    const { _id, ...productWithoutId } = product;
    let wishlistProduct = { ...productWithoutId, product_id, name: user?.displayName, email: user?.email };
console.log(wishlistProduct)
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/wishlist/${user?.email}/${_id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(wishlistProduct),
      }
    );
    const data = await res.json();
    if (data.message === "unauthorized") {
      return navigate("/login");
    }
    if(data.added === true){
      return toast.success("This Product Already Added Wishlist");
    }
    if(data.success === false){
      return toast.error("Add Wishlist Fail");
    }
    if (data.data.matchedCount > 0 || data.data.acknowledged === true) {
      return toast.success("Add Wishlist successful");
    }
    if (data.data.upsertedCount > 0) {
      return toast.success("Add Wishlist successful");
    }
  };

  // Handle Report
  const handleReport = async (e) => {
    e.preventDefault();
    if (!user) {
      return navigate("/login");
    }
    const wishlistProduct = {
      ...product,
      reportedEmail: user?.email,
      reportCount: 1,
    };

    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/reportedProduct/${product?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(wishlistProduct),
      }
    );
    const data = await res.json();
    if (data.message === "unauthorized") {
      return navigate("/login");
    }
    if (data.data.upsertedCount > 0) {
      toast.success("Add Report successful");
      return;
    }

    if (data.success === false) {
      toast.success("Add Report successful");
      return;
    }
  };

  const handleBookingModal = (product) => {
    if (!user) {
      return navigate("/login");
    }
    return setBookingModalData(product);
  };
  return (
    <div className="card product bg-base-400">
      <figure className="relative overflow-hidden">
        <img
          className="p-3 h-auto lg:h-72 w-full product-image"
          src={product?.image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body p-3 mb-3">
        <div className="product-category">
          <Link to="" className="text-left">
            {product?.categoryName}
          </Link>
        </div>
        <div className="product-title">
          <h2 className="font-bold">{product?.product_name}</h2>
        </div>
        <div className="rating">
          <span className="flex">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </span>
        </div>
        <div className="product-by flex text-left gap-1">
          <span>By</span>
          <Link to=""> {product?.brand}</Link>
        </div>
        <div className="use_and_location flex justify-between">
          <span>{product?.years_of_use} Years Of Use</span>
          <h3>{product?.location}</h3>
        </div>
        <div className="seller-info flex justify-between">
          <h3>{product?.seller}</h3>
          <div className="post_date_time">
            <p>
              {product?.posted_date} {product?.posted_time}{" "}
            </p>
          </div>
        </div>
        <div className="product-card-bottom flex justify-between">
          <div className="product-price">
            <span className="regular-price">$ {product?.regular_price}</span>
            <span className="old-price">$ {product?.sale_price}</span>
          </div>
          <div className="add-card">
            <button className="report_product_btn" onClick={handleReport}>
              Report
            </button>
          </div>
        </div>
        <div className="add-card flex justify-between items-center">
          <button className="add wishlist_btn" onClick={handleWishlist}>
            Add Wishlist
          </button>
          <label
            htmlFor="booking-modal"
            className="add"
            onClick={() => handleBookingModal(product)}
          >
            Order Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Product;
