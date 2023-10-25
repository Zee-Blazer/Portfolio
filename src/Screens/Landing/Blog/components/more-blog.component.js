import React, { useEffect, useState } from 'react';

// Backend API
import { getAllBlogs } from '../../../../Services/API/blogs.api';

// Component
import { BlogListComponent } from "../../../../Components/Blog/blog-list.component";

export const MoreBlogComponent = ({ unique }) => {

    const [storage, setStorage] = useState();

    useEffect( () => {
        getAllBlogs({ limit: 3, setStorage });
    }, [] )

    return (
        <div>
            <h3 className="more__like__blog">More like this:</h3>

            <BlogListComponent storage={ storage } unique={ unique } />

        </div>
    )
}
