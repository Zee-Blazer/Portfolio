
// Styles
import "./components/styles.css";

// Component
import { Header } from "../../../Components/Header";
import { BlogDisplayer } from "./components/blog-displayer.component";

export const DisplayBlogScreen = () => {

    document.title = "Blog"

    return (
        <div>
            <Header />
            <BlogDisplayer />
            Something good
        </div>
    )
}
