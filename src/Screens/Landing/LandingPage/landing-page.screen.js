
// Components
import { Header } from "../../../Components/Header";
import { IntroSection } from "../../../Components/Intro-section";
import { AboutComponent } from "../../../Components/About-section";
import { SkillsSection } from "../../../Components/Skills-section";
import { ProjectSection } from "../../../Components/Projects";

export const LandingScreen = () => {
    document.title = "Ganiyu Bolaji Portfolio"

    return (
        <div>
            <Header />
            <IntroSection />
            <AboutComponent />
            <SkillsSection />
            <ProjectSection />
            Landing page screen
        </div>
    )
}
