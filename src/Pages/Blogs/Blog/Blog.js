import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    return (
       <div>
            <div className="blog">
            <Link to={blog?._id}><img src={blog?.thumbnail_image} alt="" className="card-image h-[240px]" /></Link>
                <div className='author-info flex justify-between'>
                    <h3 className="p-3">{blog?.author_name}</h3>
                    <p className='p-3'>{blog?.published_date}</p>
                </div>
                <div className="blog-body p-3">
                   <Link to={blog?._id}> <h2 className='title text-left py-3'>{blog?.title}</h2></Link>
                    <p className="paragraph ">
                        {blog?.description.slice(0, 130)}
                    </p>
                </div>
             </div>
       </div>
    );
};

export default Blog;