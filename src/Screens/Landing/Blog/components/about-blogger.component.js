
// Image
import profile from '../../../../Images/profile.png';

// Component
import { MediaContactComponent } from '../../../../Components/Contact-Section/media-contact.component';

export const AboutBloggerComponent = () => {

    return (
        <div className='about__person'>
            <div className="about__person__header">
                <img src={profile} height={46} width={38} />
                <div>
                    <h5>Ganiyu Bolaji</h5>
                    <p>Software Engineer</p>
                </div>
            </div>
            
            <div className='about__person__cont'>
                <h4 className='about__person__blogger'>About</h4>
                <p className='about__person__descript'>
                    Hello there! 👋 I'm Bolaji, a passionate software engineer based in Nigeria, navigating the vast realms of the MERN stack. A relentless learner, I'm on a quest to continuously grow my skills and shape my career. Beyond coding, I harbor ambitions of building my own empire. Join me on this exciting journey as we turn lines of code into impactful innovations. Let's create, innovate, and build something extraordinary together. Welcome to my world of endless possibilities! 🚀
                </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "7px" }}>
                <MediaContactComponent />
            </div>
        </div>
    )
}
