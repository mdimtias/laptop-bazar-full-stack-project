import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Google from './../../../assets/LogIn/google.png'

const Login = () => {
    const {signIn, providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate();
    // useEffect(() => {
    //   if (user) {
    //     navigate("/");
    //   }
    // }, [navigate, user]);
    
    const handleLogIn = (e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(async () => {
             fetch(`${process.env.REACT_APP_API_URL}/users/${email}`,{
                    method: "PUT",
                    headers: {
                      "content-type": "application/json"
                    },
                    body: JSON.stringify({email})
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("token", `bearer ${data.token}`)
                })
            toast.success("LogIn Successful")})
        .catch(err=>{
            console.log(err.message)
            toast.error("LogIn Fail")})
    }

    const handleGoogleLogIn = ()=>{
      providerLogin(googleProvider)
      .then(data=>{
        const userData = {
          name: data?.user?.displayName,
          email: data?.user?.email,
          role: "buyer"
        }
        fetch(`${process.env.REACT_APP_API_URL}/users/${data?.user?.email}`,{
          method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userData)
      })
      .then(res=>res.json())
      .then(data=>{
          localStorage.setItem("token", `bearer ${data.token}`)
      })
       toast.success("LogIn Successful")
       navigate("/")
      })
      .catch(error=>{
        toast.error("Login Fail! Please Try Again")
      })

    }
    return (
        <div className="d-flex justify-center items-center p-12">
      <form action="" onSubmit={handleLogIn}>
        <div className="p-2">
          <input
          name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div className="p-2">
          <input
          name="password"
            type="text"
            placeholder="Password"
            className="input input-bordered input-accent w-full max-w-xs"
          />
        </div>
        <div>
        <button className="btn w-full max-w-xs">Log In</button>
        </div>
      </form>
      <div className="social-login">
        <h6 className='text-center py-3 font-bold text-[#999999]'>Or</h6>
        <button onClick={handleGoogleLogIn}><img src={Google} alt="" /></button>
      </div>
    </div>
    );
};

export default Login;