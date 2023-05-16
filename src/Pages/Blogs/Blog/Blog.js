import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({blog}) => {
    return (
       <div>
            <div className="blog">
            <Link to={blog?._id}><img src={blog?.thumbnail_image} alt={blog?.title} className="card-image rounded-lg w-full h-64 md:h-60" /></Link>
                <div className='author-info flex justify-between'>
                    <h3 className="p-3">{blog?.author_name}</h3>
                    <p className='p-3'>{blog?.published_date}</p>
                </div>
                <div className="blog-body px-3 pb-3">
                   <Link to={blog?._id}> <h2 className='title text-left py-3'>{blog?.title}</h2></Link>
                    <p className="paragraph text-left">
                        {blog?.description.slice(0, 130)}
                    </p>
                </div>
             </div>
       </div>
    );
};

export default Blog;