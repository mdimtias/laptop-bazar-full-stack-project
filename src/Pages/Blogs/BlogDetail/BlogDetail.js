import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../SharedPage/Loading/Loading";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog = [], isLoading } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/blog/${id}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (blog.data && blog.data.length > 0) {
    const {
      title,
      description,
      author_img,
      author_name,
      published_date,
      thumbnail_image,
    } = blog.data[0] || {};
    document.title = title;
    return (
     <div className="">
       <div className="container mx-auto px-5 lg:px-72">
        <div className="grid-cols-1">
          <div className="blog_thumbnail w-full py-5 flex items-center justify-center">
            <img src={thumbnail_image} alt={title} className="w-full rounded-xl" />
          </div>
          <div className="author flex items-center justify-between px-10">
            <div className="avatar flex items-center justify-center">
              <div className="w-[80px] rounded-full">
                <img src={author_img} alt="title" />
              </div>
              <span className="px-5">{author_name}</span>
            </div>
            <p>{published_date}</p>
          </div>
          <div className="blog-title py-5">
            <h2 className="font-bold text-2xl">{title}</h2>
          </div>
          <div className="blog-paragraph py-5">
            <p className="text-left">{description}</p>
          </div>
        </div>
      </div>
     </div>
    );
  } else {
    return (
      <div className='py-20 text-center'>
      <p className='text-center text-xl text-black font-semibold'>Blog Post Not Found, Please Try Again Later!</p>
      <span className='text-lg block'>Or </span>
      <span className="text-lg font-semibold">Back to </span>
      <Link to="/" className='text-blue-500 font-bold text-xl'>Home</Link>
    </div>
    );
  }
};

export default BlogDetail;

