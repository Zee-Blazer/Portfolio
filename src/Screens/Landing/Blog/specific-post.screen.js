
// Components
import { Header } from "../../../Components/Header";
import { BlogDetailsComponent } from "./components/blog-details.component";
import { FooterComponent } from "../../../Components/Header/footer";

export const SpecificPostScreen = () => {

    document.title = "Blog Title"

    return (
        <div>
            <Header />
            <BlogDetailsComponent />
            <FooterComponent />
        </div>
    )
}
