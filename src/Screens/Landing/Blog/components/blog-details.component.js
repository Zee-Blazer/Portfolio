
// Component
import { MainBlogComponent } from './main-blog.component';
import { AboutBloggerComponent } from './about-blogger.component';
import { MoreBlogComponent } from './more-blog.component';

export const BlogDetailsComponent = () => {

    return (
        <>
            <div className="blog__detail__cont">
            
                <MainBlogComponent />

                <AboutBloggerComponent />

            </div>

            <MoreBlogComponent />
        </>
    )
}
