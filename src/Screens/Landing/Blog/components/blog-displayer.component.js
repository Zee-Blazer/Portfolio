
// Navigation
import { useNavigate } from "react-router-dom";

// Component
import { BlogListComponent } from "../../../../Components/Blog/blog-list.component";

export const BlogDisplayer = ({ type }) => {

    const navigate = useNavigate();

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
            <BlogListComponent type={ type } />
        </div>
    )
}
