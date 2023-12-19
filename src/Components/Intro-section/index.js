
// Styling
import "./styles.css";

// Images
import Main from '../../Images/profile-me.png';
import Shape from '../../Images/Ellipse-2.png';

// Animation
import 'animate.css';

export const IntroSection = () => {

    return (
        <div className="intro__section" id="Home">
            <img src={ Shape } className="shape-1__img" />
            <div>
                <h2 className="animate__animated animate__bounce">
                    <span className="span__green">Hey,</span>
                    <span className="span__blue"> I'm</span>
                    <span className="span__org"> Ganiyu Bolaji</span>
                </h2>
                <h1 className="animate__animated animate__flash">
                    <span className="span__green">Full</span>
                    <span className="span__blue"> Stack</span>
                    <span className="span__org"> Developer</span>
                </h1>
                <h4 className="skill__header">MERN Stack | Web & Mobile</h4>
            </div>
            <img src={ Main } className="main__img" />
        </div>
    )
}
