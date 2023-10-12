
// Component
import { BlogListComponent } from "../../../../Components/Blog/blog-list.component";

export const BlogDisplayer = ({ type }) => {

    return (
        <div>
            <h3 className="blog__title__head">Blog</h3>
            <BlogListComponent type={ type } />
        </div>
    )
}
