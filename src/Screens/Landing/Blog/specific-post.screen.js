
import { useParams } from 'react-router-dom';

// Components
import { Header } from "../../../Components/Header";
import { BlogDetailsComponent } from "./components/blog-details.component";
import { FooterComponent } from "../../../Components/Header/footer";

export const SpecificPostScreen = () => {

    const { id } = useParams();

    document.title = id;

    return (
        <div>
            <Header />
            <BlogDetailsComponent />
            <FooterComponent />
        </div>
    )
}
