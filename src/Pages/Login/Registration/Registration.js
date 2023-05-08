import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { ImgUpload } from "../../../hooks/ImgUpload";
import useTitle from "../../../hooks/useTitle";
import Loading from "../../SharedPage/Loading/Loading";
import Google from "./../../../assets/LogIn/google.png";

const Registration = () => {
  const googleProvider = new GoogleAuthProvider();
  useTitle("Registration");
  const { user, providerLogin } = useContext(AuthContext);
  const { createUser, updateUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const signUpHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const accountType = form.accountType.value;

    // Upload Image Server
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const imageUploadServer = await ImgUpload(formData);
    // User Data Object
    const userData = { name: name, email: email, role: accountType };
    // Create User Database
    const createUserDb = async (email) => {
      await fetch(`${process.env.REACT_APP_API_URL}/users/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", `bearer ${data.token}`);
        });
    };

    // Registration User
    createUser(email, password)
      .then(() => {
        updateUser(name, imageUploadServer).then(() => {
          createUserDb(email);
          setLoading(false);
          toast.success("Registration Successful");
        });
      })
      .catch((err) => toast.error("Account Create Fail"));
  };

  // Social Login
  const handleFacebookLogIn = () => {
    providerLogin(googleProvider)
      .then((data) => {
        const userData = {
          name: data?.user?.displayName,
          email: data?.user?.email,
          role: "buyer",
        };
        fetch(`${process.env.REACT_APP_API_URL}/users/${data?.user?.email}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", `bearer ${data.token}`);
          });
        toast.success("LogIn Successful");
      })
      .catch((error) => {
        toast.error("Login Fail! Please Try Again");
      });
  };
  return (
    <div className="d-flex justify-center items-center p-12">
      <form action="" onSubmit={signUpHandler}>
        <div className="p-2">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered input-accent w-full max-w-xs"
            required
          />
        </div>

        <div className="p-2">
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
            required
          />
        </div>
        <div className="p-2">
          <input
            name="image"
            type="file"
            accept="image/*"
            className="file-input input-accent w-full max-w-xs"
            required
          />
        </div>
        <div className="p-2">
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered input-accent w-full max-w-xs"
            required
          />
        </div>
        <div className="p-2">
          <div className="flex justify-center items-center flex-col">
            <h3>Account Type</h3>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text px-3">User</span>
                <input
                  type="radio"
                  name="accountType"
                  className="radio radio-info"
                  value="buyer"
                  defaultChecked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text px-3">Seller</span>
                <input
                  type="radio"
                  name="accountType"
                  className="radio radio-info"
                  value="seller"
                />
              </label>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" className="btn w-full max-w-xs">
            {loading ? <Loading></Loading> : "SignUp"}
          </button>
        </div>
      </form>
      <div className="social-login">
        <h6 className="text-center py-3 font-bold text-[#999999]">Or</h6>
        <button onClick={handleFacebookLogIn}>
          <img src={Google} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Registration;
