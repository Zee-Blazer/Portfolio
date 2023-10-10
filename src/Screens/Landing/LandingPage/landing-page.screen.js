
// Components
import { Header } from "../../../Components/Header";
import { IntroSection } from "../../../Components/Intro-section";
import { AboutComponent } from "../../../Components/About-section";
import { SkillsSection } from "../../../Components/Skills-section";
import { ProjectSection } from "../../../Components/Projects";
import { BlogSection } from "../../../Components/Blog";
import { ContactSection } from "../../../Components/Contact-Section";

export const LandingScreen = () => {
    document.title = "Ganiyu Bolaji Portfolio"

    return (
        <div>
            <Header />
            <IntroSection />
            <AboutComponent />
            <SkillsSection />
            <ProjectSection />
            <BlogSection />
            <ContactSection />
            Landing page screen
        </div>
    )
}
