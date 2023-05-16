import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Blog from '../Blog/Blog';
import "./Blogs.css";
import Loading from '../../SharedPage/Loading/Loading';
import { Link } from 'react-router-dom';

const Blogs = () => {
    useTitle("Blogs")
    const { data: blogs = [], isLoading } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/blog`, {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            });
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    if (blogs.success === false) {
        return <div className='py-20 text-center'>
            <p className='text-center text-xl text-black font-semibold'>Data Load Fail, Please Try Again Later!</p>
            <span className='text-lg block'>Or </span>
            <span className="text-lg font-semibold">Back to </span>
            <Link to="/" className='text-blue-500 font-bold text-xl'>Home</Link>
        </div>
    }
    return (
        <div className="py-10">
            <div className='container mx-auto px-5 lg:px-0'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {(typeof blogs?.data === 'object' && Array.isArray(blogs?.data)) &&
                        blogs?.data?.map((blog) => {
                            return (
                                <Blog key={blog._id} blog={blog}></Blog>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;

