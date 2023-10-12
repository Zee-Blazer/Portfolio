
// Components
import { Header } from "../../../Components/Header";
import { BlogDisplayer } from "../../Landing/Blog/components/blog-displayer.component";

export const BlogsScreen = () => {

    document.title = "Blogs";

    return (
        <div>
            <Header type="Dashboard" />
            <BlogDisplayer type="Dashboard" />
        </div>
    )
}
