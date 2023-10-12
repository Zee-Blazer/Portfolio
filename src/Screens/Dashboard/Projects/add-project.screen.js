
// Styles
import './components/styles.css';

// Component
import { Header } from "../../../Components/Header";
import { AdderComponent } from "./components/adder.component";

export const AddProjectScreen = () => {

    document.title = "Add New Project"

    return (
        <div>
            <Header type="Dashboard" />
            <AdderComponent />
        </div>
    )
}
