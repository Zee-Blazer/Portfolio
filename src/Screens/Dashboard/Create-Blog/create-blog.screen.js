
// Components
import { Header } from "../../../Components/Header";
import { FillDetails } from "./components/fill-details.component";

export const CreateBlogScreen = () => {

    document.title = "Create New Blog"

    return (
        <div>
            <Header type="Dashboard" />
            <FillDetails />
        </div>
    )
}
