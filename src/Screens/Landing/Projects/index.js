
// Components
import { Header } from "../../../Components/Header";
import { ProjectDisplayComponent } from "./components/project-display.component";
import { FooterComponent } from '../../../Components/Header/footer';

export const DisplayProjectScreen = () => {

    document.title = "Projects"

    return (
        <div>
            <Header />

            <ProjectDisplayComponent display="sample" />

            <FooterComponent />
        </div>
    )
}
