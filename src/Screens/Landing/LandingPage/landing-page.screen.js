
// Components
import { Header } from "../../../Components/Header";
import { IntroSection } from "../../../Components/Intro-section";
import { AboutComponent } from "../../../Components/About-section";

export const LandingScreen = () => {
    document.title = "Ganiyu Bolaji Portfolio"

    return (
        <div>
            <Header />
            <IntroSection />
            <AboutComponent />
            Landing page screen
        </div>
    )
}
