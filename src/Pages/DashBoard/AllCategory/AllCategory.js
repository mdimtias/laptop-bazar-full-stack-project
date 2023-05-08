import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import useTitle from "../../../hooks/useTitle";

const AllCategory = () => {
  useTitle("All Category")
  const { data: categories = [], refetch } = useQuery({
    queryKey: ["users"],
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

  const handleDeleteCategory = (category)=>{
        fetch(`${process.env.REACT_APP_API_URL}/category/${category._id}`, {
            method: "DELETE",
            headers: {
                authorization: localStorage.getItem("token")
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success(`Successfully Delete ${category.name} Category`)
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
      <h2 className="text-3xl mb-5">All Category</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Logo</th>
              <th>Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories?.data?.map((category, i) => (
              <tr key={category._id}>
                <th>{category.id}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={category.logo} alt=""/>
                    </div>
                  </div>
                </th>
                <td>{category?.name}</td>
                <td>
                  <button className="btn btn-xs btn-danger" onClick={()=>handleDeleteCategory(category)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCategory;
