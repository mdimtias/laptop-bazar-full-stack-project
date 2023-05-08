import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";

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
  const {
    title,
    description,
    author_img,
    author_name,
    published_date,
    thumbnail_image,
  } = blog.data[0];
  useTitle(title);
  if (isLoading) {
    return;
  }

  return (
    <div className="container mx-auto">
      <div className="grid-cols-1">
        <div className="blog_thumbnail w-full py-5 flex items-center justify-center">
          <img src={thumbnail_image} alt="" />
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
          <p className="">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
