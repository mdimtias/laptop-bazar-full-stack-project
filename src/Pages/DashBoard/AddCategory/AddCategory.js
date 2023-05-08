import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ImgUpload } from '../../../hooks/ImgUpload';
import useTitle from '../../../hooks/useTitle';

const AddCategory = (data) => {
    const navigate = useNavigate();
    useTitle("Add Category")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: categories=[] } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/category`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleAddCategory = async (data)=>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image)
        const imageUpload = await ImgUpload(formData)
        const category = {
            id: categories?.data?.length + 1,
            name: data.name,
            logo: imageUpload,
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/category`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: localStorage.getItem("token"),
            },
            body: JSON.stringify(category)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.data.acknowledged){
                toast.success("Category Created Successful");
                navigate("/")
            }
            
        })
    }
    return (
        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add A Category</h2>
        <form onSubmit={handleSubmit(handleAddCategory)}>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>

            <input className='btn btn-accent w-full mt-4' value="Add Category" type="submit" />
         </form>
         </div>   
    );
};

export default AddCategory;