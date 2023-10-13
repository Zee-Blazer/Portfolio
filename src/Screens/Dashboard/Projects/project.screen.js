
// Components
import { Header } from "../../../Components/Header";
import { ProjectDisplayComponent } from "../../Landing/Projects/components/project-display.component";

export const ProjectScreen = () => {

    document.title = "Projects";

    return (
        <div>
            <Header type="Dashboard" />
            <ProjectDisplayComponent display="sample" type="Dashboard" />
        </div>
    )
}
