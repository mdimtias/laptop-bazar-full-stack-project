import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ bookingModalData, setBookingModalData }) => {
  const [btnDisablse, setBtnDisabled] = useState(false)
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleOrder = (event) => {
    event.preventDefault();
    setBtnDisabled(true)
    if(!user){
      return navigate("/login")
    }
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const meeting_location = form.meeting_location.value;
    const phone = form.phone.value;

    const orderData = {
        name,
        email, 
        product_name: bookingModalData?.product_name,
        price: bookingModalData?.sale_price,
        meeting_location,
        image: bookingModalData?.image,
        phone
    }

    fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(orderData)
    })
    .then(res=>res.json())
    .then(data=>{
        toast.success(`Successfully place your order!`)
        setBookingModalData(null)
       if(data.message === "unauthorized"){
        return navigate("/login")
       }
    setBtnDisabled(false)
    })
    .catch(error=>{
        toast.success(`Order Place Fail`)
        console.log(error)
        setBookingModalData(null)
        setBtnDisabled(false)
    })

  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Order Form</h3>
          <form
            onSubmit={handleOrder}
            className="grid grid-cols-1 gap-2 mt-1"
          >
            <div className="flex justify-center items-center"><img src={bookingModalData?.image} alt="" className="w-[75px]" /></div>
            <h3 name="product_name" className="font-bold text-base">Product: {bookingModalData?.product_name}</h3>
            <input
              name="price"
              type="text"
              value={`Price $${bookingModalData?.sale_price}`}
              disabled
              className="input w-full input-bordered"
            />

            <input
              name="name"
              type="text"
              value={user?.displayName}
              disabled
              placeholder="Name"
              className="input w-full input-bordered"
            />

            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input w-full input-bordered"
            />

              <input
                name="meeting_location"
                type="text"
                placeholder="Meeting Location"
                className="input w-full input-bordered"
                required
              />

              <input
                name="phone"
                type="number"
                placeholder="Phone"
                className="input w-full input-bordered"
                required
              />
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Order"
              disabled={btnDisablse}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingModal;
