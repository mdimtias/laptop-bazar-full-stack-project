import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AllUsers = () => {
  useTitle("All Users");
  const [userRole, setUserRole] = useState("");

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", userRole],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${userRole}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Make Admin Successful");
          refetch();
        }
      });
  };

  const handleUser = (e) => {
    setUserRole(e.target.value);
  };

// Verify Seller
const handleVerifyUser = (user)=>{
    fetch(`${process.env.REACT_APP_API_URL}/users/seller/${user?._id}`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount > 0) {
          toast.success("Make Seller Verified Successful");
          refetch();
        }
      });
}
  // Delete User
  const handleDeleteUser = (user)=>{
    fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
            method: "DELETE",
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.data.acknowledged){
                toast.success(`Successfully Delete ${user.name}`)
                refetch();
            }
        })
        .catch(error=>{
            console.log(error);
            toast.error("Data Delete Fail");
        })
  }

  return (
    <div>
      <h2 className="text-3xl mb-5">All user</h2>
      <div className="overflow-x-auto">
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={handleUser}
        >
          <option defaultValue="none" disabled>
            Filter User
          </option>
          <option value="">All User</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <table className="table w-full">
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
             {
              userRole === "seller" && <>
               <th>Status</th>
              <th>Verify</th>
              </>
             }
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role !== "admin" ? (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-xs btn-primary"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <></>
                  )}
                </td>
                {
                  userRole === "seller" && <>
                  <td>{user?.status || "unverified"}</td>
                  <td><button onClick={()=>handleVerifyUser(user)} className="btn btn-xs btn-secondary">Verify</button></td>
                  </>
                }
                <td>
                  <button className="btn btn-xs btn-danger" onClick={()=>handleDeleteUser(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
