import React, { useState, useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';

// Context
import { MediaDisplayContext } from '../../../../Services/Context/media-display.context';

// API request
import { getParticularBlog } from '../../../../Services/API/blogs.api';

// Component
import { MainBlogComponent } from './main-blog.component';
import { AboutBloggerComponent } from './about-blogger.component';
import { MoreBlogComponent } from './more-blog.component';

export const BlogDetailsComponent = () => {

    const [blog, setBlog] = useState();
    const { route } = useParams();

    // const { blogDetails } = useContext( MediaDisplayContext );

    useEffect( () => {

        getParticularBlog(route, setBlog);
    }, [] )

    return (
        <>
            <div className="blog__detail__cont">
            
                { blog && <MainBlogComponent blogDetails={ blog } /> }

                <AboutBloggerComponent />

            </div>

            <MoreBlogComponent unique={ blog } />
        </>
    )
}
