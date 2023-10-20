import React, { useContext } from 'react';

// Context
import { MediaDisplayContext } from '../../../../Services/Context/media-display.context';

// Component
import { MainBlogComponent } from './main-blog.component';
import { AboutBloggerComponent } from './about-blogger.component';
import { MoreBlogComponent } from './more-blog.component';

export const BlogDetailsComponent = () => {

    const { blogDetails } = useContext( MediaDisplayContext );

    return (
        <>
            <div className="blog__detail__cont">
            
                <MainBlogComponent blogDetails={ blogDetails } />

                <AboutBloggerComponent />

            </div>

            <MoreBlogComponent />
        </>
    )
}
