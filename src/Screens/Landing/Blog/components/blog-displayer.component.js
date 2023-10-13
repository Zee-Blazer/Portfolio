
// Component
import { BlogListComponent } from "../../../../Components/Blog/blog-list.component";

export const BlogDisplayer = ({ type }) => {

    return (
        <div>
            <div className="display__adder">
                <h3 className="blog__title__head">Blog</h3>
                { type === "Dashboard" && <div className="adder__blog">Add</div> }
            </div>
            <BlogListComponent type={ type } />
        </div>
    )
}
