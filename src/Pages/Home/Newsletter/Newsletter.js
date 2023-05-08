import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import "./Newsletter.css";

const Newsletter = () => {
    const handleSubscribe = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        
        fetch(`${process.env.REACT_APP_API_URL}/subscribe/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({email: email})
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.data.upsertedCount>0){
                toast.success("Subscribe Successful! Thank You")
                return
            }
            if(data.data.matchedCount>0){
                toast.success("Your are already Subscribe. Thanks")
                return
            }
            
        })

    }
    return (
        <div className="newsletter-section py-10 bg-gradient-to-r from-[rgba(2,0,36,1)] via-[rgba(6,26,118,1)] to-[rgba(6,26,118,1)]">
            <div className='container mx-auto px-5'>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 py-5 newsletter">
                    <div className="subscribe">
                        <h2 className="font-bold text-white  text-3xl mb-3">Stay home & get your daily <br />needs from our shop</h2>
                        <p className="text-gray-400 text-xl mb-4">Start You'r Daily Shopping with <Link to="/">Second-hand Laptop</Link></p>
                        <form action="" onSubmit={handleSubscribe}>
                        <input type="text" placeholder="Enter Your Email Address" className="input input-bordered input-accent w-full max-w-xs" name="email" />
                        <button type="submit" className="btn btn-secondary mt-3">Subscribe</button>
                        </form>
                    </div>
                    <div className="subscribe-img flex justify-center items-center">
                        <img src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08186082.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;