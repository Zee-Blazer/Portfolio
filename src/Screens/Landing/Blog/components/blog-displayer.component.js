import React, { useEffect, useState } from 'react';

// Navigation
import { useNavigate } from "react-router-dom";

// Backend API
import { getAllBlogs } from "../../../../Services/API/blogs.api";

// Component
import { BlogListComponent } from "../../../../Components/Blog/blog-list.component";

export const BlogDisplayer = ({ type }) => {

    const navigate = useNavigate();

    const [storage, setStorage] = useState();

    useEffect( () => {
        getAllBlogs({ setStorage });
    }, [] )

    return (
        <div>
            <div className="display__adder">
                <h3 className="blog__title__head">Blog</h3>
                { 
                    type === "Dashboard" && 
                    <div 
                        className="adder__blog"
                        onClick={ () => navigate("/dashboard/create-blog") }
                    >Add</div> 
                }
            </div>
            <BlogListComponent type={ type } storage={ storage } />
        </div>
    )
}
