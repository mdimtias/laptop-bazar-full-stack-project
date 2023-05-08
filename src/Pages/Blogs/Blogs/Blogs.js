import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Blog from '../Blog/Blog';
import "./Blogs.css";

const Blogs = () => {
    useTitle("Blogs")
    const { data: blogs=[], isLoading } = useQuery({
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
    if(isLoading){
        return
    }
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    blogs?.data?.map((blog)=>{
                        return(
                            <Blog key={blog._id} blog={blog}></Blog>
                        )
                    })
                }
                <Blog></Blog>
                <Blog></Blog>
                <Blog></Blog>
            </div>
        </div>
    );
};

export default Blogs;

