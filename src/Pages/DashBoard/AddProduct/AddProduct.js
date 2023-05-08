import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { ImgUpload } from '../../../hooks/ImgUpload';
import useTitle from '../../../hooks/useTitle';
import "./AddProduct.css";

const AddProduct = () => {
    useTitle("Add Product")
  
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useContext(AuthContext)
  
    const { data: categories=[] } = useQuery({
        queryKey: ['category'],
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

    const handleAddProduct =async (data)=>{
        data.email = user?.email;
        data.seller = user?.displayName;
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image)
        
        const imageUpload = await ImgUpload(formData)
        data.image = imageUpload;
        fetch(`${process.env.REACT_APP_API_URL}/products`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: localStorage.getItem("token")
                        },
                        body: JSON.stringify(data)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        toast.success(`Product Added successful`)
                        navigate("/dashboard/my-products")
                    })
                    .catch(error=>{
                        toast.success(`Product Added Fail`)
                        console.log(error)
                    })
    }
    return (
        <div className='p-7'>
        <h2 className="text-4xl">Add A Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="form-control max-w-xs">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("product_name", {
                        required: "Product Name is Required"
                    })} className="input input-bordered w-full max-w-xs" placeholder='Product title' />
                    {errors.product_name && <p className='text-red-500'>{errors.product_name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Regular Price</span></label>
                    <input type="number" {...register("regular_price")} 
                    className="input input-bordered w-full max-w-xs"  placeholder='Product Regular Price' />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Sale Price</span></label>
                    <input type="number" {...register("sale_price", {
                        required: "Sale Price is Required"
                    })} className="input input-bordered w-full max-w-xs" placeholder='Product Sale Price' />
                    {errors.sale_price && <p className='text-red-500'>{errors.sale_price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category Name</span></label>
                    <select {...register('categoryName', {
                        required: "Category Name is Required"
                    })}
                    className="select input-bordered w-full max-w-xs">
                        {/* <option value="select" defaultSelected >Select Category</option> */}
                        {
                            
                            categories?.data?.map((category, i) => <option
                                key={category.id}
                                value={category.name}
                                
                            >{category.name} </option>
                             )
                        }
                    </select>
                    {errors.categoryName && <p className='text-red-500'>{errors.categoryName.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition Type</span></label>
                    <select name="" id="" {...register('condition_type', {
                        required: "Condition type is Required"
                    })} className="select input-bordered w-full max-w-xs">
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fair">Fair</option>
                    </select>
                    {errors.condition_type && <p className='text-red-500'>{errors.condition_type.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Category Id</span></label>
                <select {...register('id')}
                   className="select input-bordered w-full max-w-xs">
                    <option disabled defaultValue="Select Category Id Carefully">Select Category Id Carefully</option>
                       {
                           categories?.data?.map((category, i) => <option
                               key={i}
                               value={category.id}
                               
                           >{category.id} </option>  )
                          
                       }
                   </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Processor</span></label>
                    <input type="text" {...register("processor")} className="input input-bordered w-full max-w-xs" placeholder='Processor' />
                    {errors.processor && <p className='text-red-500'>{errors.processor.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Brand</span></label>
                    <input type="text" {...register("brand", {
                        required: "Sale Price is Required"
                    })} className="input input-bordered w-full max-w-xs" placeholder='Brand Name' />
                    {errors.brand && <p className='text-red-500'>{errors.brand.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Stock</span></label>
                    <input type="number" {...register("stock", {
                        required: "Stock is Required"
                    })} className="input input-bordered w-full max-w-xs" placeholder='Total Product Stock Quantity' />
                    {errors.stock && <p className='text-red-500'>{errors.stock.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Product Code</span></label>
                    <input type="text" {...register("product_code", {
                        required: "Sale Price is Required"
                    })} className="input input-bordered w-full max-w-xs" placeholder='Product Code' />
                    {errors.product_code && <p className='text-red-500'>{errors.product_code.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Model</span></label>
                    <input type="text" {...register("model", {
                        required: "Model Name is Required"
                    })} className="input input-bordered w-full max-w-xs" placeholder='Model' />
                    {errors.model && <p className='text-red-500'>{errors.model.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Generation</span></label>
                    <input type="text" {...register("generation")} className="input input-bordered w-full max-w-xs" placeholder='Generation' />
                    {errors.generation && <p className='text-red-500'>{errors.generation.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">CPU Cache</span></label>
                    <input type="text" {...register("cpu_cache")} className="input input-bordered w-full max-w-xs" placeholder='Cpu Cache' />
                    {errors.cpu_cache && <p className='text-red-500'>{errors.cpu_cache.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Years Of Use Product</span></label>
                    <input type="text" {...register("years_of_use")} className="input input-bordered w-full max-w-xs" placeholder='Years Of Use Product' />
                    {errors.years_of_use && <p className='text-red-500'>{errors.years_of_use.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location")} className="input input-bordered w-full max-w-xs" placeholder='Location' />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Date Of Post</span></label>
                    <input type="text" {...register("posted_date")} className="input input-bordered w-full max-w-xs" placeholder='Post Date' />
                    {errors.posted_date && <p className='text-red-500'>{errors.posted_date.message}</p>}
                </div>

            </div>

            <h2 className="font-bold">Display</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                
            <div className="form-control max-w-xs">
                <label className="label"> <span className="label-text">Size</span></label>
                <input type="text" {...register("size")} className="input input-bordered w-full max-w-xs" placeholder='Display Size' />
                {errors.size && <p className='text-red-500'>{errors.size.message}</p>}
            </div>
           
            <div className="form-control max-w-xs">
                <label className="label"> <span className="label-text">Resolution</span></label>
                <input type="text" {...register("resolution")} className="input input-bordered w-full max-w-xs" placeholder='Display Resolution' />
                {errors.resolution && <p className='text-red-500'>{errors.resolution.message}</p>}
            </div>
           
            <div className="form-control max-w-xs">
                <label className="label"> <span className="label-text">Display Features</span></label>
                <input type="text" {...register("display_features")} className="input input-bordered w-full max-w-xs"  placeholder='Display Features' />
                {errors.display_features && <p className='text-red-500'>{errors.display_features.message}</p>}
            </div>
            </div>

            <h2 className="font-bold">Memory</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="form-control max-w-xs">
                <label className="label"> <span className="label-text">Type</span></label>
                <input type="text" {...register("ram_type")} className="input input-bordered w-full max-w-xs"  placeholder='Ram Type' />
                {errors.ram_type && <p className='text-red-500'>{errors.ram_type.message}</p>}
            </div>
            <div className="form-control max-w-xs">
                <label className="label"> <span className="label-text">Ram</span></label>
                <input type="text" {...register("ram")} className="input input-bordered w-full max-w-xs"  placeholder='Ram GB' />
                {errors.ram && <p className='text-red-500'>{errors.ram.message}</p>}
            </div>
            <div className="form-control max-w-xs">
                <label className="label"> <span className="label-text">Ram Slot</span></label>
                <input type="number" {...register("ram_slot")} className="input input-bordered w-full max-w-xs" placeholder='Total Ram Slot' />
                {errors.ram_slot && <p className='text-red-500'>{errors.ram_slot.message}</p>}
            </div>
       
           
            </div>
            <h2>Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control max-w-xs">
                    <label className="label"> <span className="label-text">Question</span></label>
                    <input type="text" {...register("question")} className="input input-bordered w-full max-w-xs"  placeholder='Question' />
                    {errors.question && <p className='text-red-500'>{errors.question.message}</p>}
                </div>
                <div className="form-control max-w-xs">
                    <label className="label"> <span className="label-text">Answer</span></label>
                    <input type="text" {...register("answer")} className="input input-bordered w-full max-w-xs"  placeholder='Answer' />
                    {errors.answer && <p className='text-red-500'>{errors.answer.message}</p>}
                </div>
            </div>

            <h2>Description</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control max-w-xs">
                    <label className="label"> <span className="label-text">Description Title</span></label>
                    <input type="text" {...register("description_title")} className="input input-bordered w-full max-w-xs"  placeholder='Description Title' />
                    {errors.description_title && <p className='text-red-500'>{errors.description_title.message}</p>}
                </div>
                <div className="form-control max-w-xs">
                    <label className="label"> <span className="label-text">Full Description</span></label>
                    {/* <input type="textarea" {...register("full_description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs"  placeholder='Write Long Description Your Product' /> */}
                    <textarea className="textarea textarea-bordered" placeholder="Write Long Description Your Product" {...register("full_description")}></textarea>
                    {errors.full_description && <p className='text-red-500'>{errors.full_description.message}</p>}
                </div>
            </div>

            <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;