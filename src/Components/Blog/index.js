import React, { useEffect, useState } from 'react';

// Styling 
import './styles.css';

// Backend API
import { getAllBlogs } from '../../Services/API/blogs.api';

// Navigation
import { useNavigate } from 'react-router-dom';

// Components
import { BlogListComponent } from './blog-list.component';

export const BlogSection = () => {

    const navigate = useNavigate();

    const [storage, setStorage] = useState();

    useEffect( () => {
        getAllBlogs({ limit: 3, setStorage });
    }, [] )

    return (
        <div className="blog__section" id="Blog">
            <h3>Blog</h3>

            <BlogListComponent storage={ storage } />

            <button 
                className='main__btn'
                onClick={ () => navigate('/blog') }
            >Explore More</button>
        </div>
    )
}
