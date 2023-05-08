import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Logo from "../../../assets/Logo/logo.png";
const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = (e)=>{
    e.preventDefault();
    logOut()
    .then(()=>{
      toast.success("Successfully log out")
    })
    .catch(error=>console.log(error.message))
  }
    return (
        <div className="navbar bg-[#0A2284] py-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-white font-bold bg-[#0A2284]">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Services</Link></li>
        {user?.email ?  <Link to="/" className="px-5 py-2 rounded-lg text-black bg-white font-bold hover:bg-[#035DED] hover:text-white"><button onClick={handleLogOut}>Log Out</button></Link> : ""}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost normal-case text-white font-bold text-xl"> <img className="w-12 mr-2"  src={Logo} alt="" /> Laptop Bazar</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white font-bold">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/shop">Shop</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/" className='px-2 hidden md:block font-bold text-white font-oswald'>{user?.displayName || user?.email}</Link>
   {user?.email ?  <Link to="/" className="px-5 py-2 hidden md:block rounded-lg text-black bg-white font-bold hover:bg-[#035DED] hover:text-white"><button onClick={handleLogOut}>Log Out</button></Link> :
   <>
    <Link to="/login" className="px-5 py-2 rounded-lg m-2 text-black bg-white font-bold hover:bg-[#035DED] hover:text-white">Login</Link>
    <Link to="/signup" className="px-5 py-2 rounded-lg m-2 text-black bg-white font-bold hover:bg-[#035DED] hover:text-white">Sign Up</Link>
   </>
   }
    {user?.photoURL ? <div className="avatar px-2"><div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"><img src={user?.photoURL} alt="" /></div></div> : <></>}
  </div>
  <div className="dropdown">
  <label tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={1} className="ml-[-65px] lg:ml-[-500px] menu-compact dropdown-content mt-3 py-2 shadow rounded-box  text-white font-bold bg-[#0A2284]">
      <li className="px-5"><Link to="/">Home</Link></li>
      <li className="px-5"><Link to="/blogs">Blogs</Link></li>
      <li className="px-5"><Link to="/shop">Shop</Link></li>
      <li className="px-5"><Link to="/dashboard">Dashboard</Link></li>
        {user?.email ?<li className="py-3">  <Link to="/" className="py-2 px-5 mt-3 rounded-lg text-black bg-white font-bold hover:bg-[#035DED] hover:text-white"><button onClick={handleLogOut}>Log Out</button></Link> </li> : ""}
      </ul>
  </div>
</div>
    );
};

export default Navbar;