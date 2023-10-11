
// Styles
import "./components/styles.css";

// Component
import { Header } from "../../../Components/Header";
import { BlogDisplayer } from "./components/blog-displayer.component";
import { FooterComponent } from '../../../Components/Header/footer';

export const DisplayBlogScreen = () => {

    document.title = "Blog"

    return (
        <div>
            <Header />
            <BlogDisplayer />
            <FooterComponent />
        </div>
    )
}
