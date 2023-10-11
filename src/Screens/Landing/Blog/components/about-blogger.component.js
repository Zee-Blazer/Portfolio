
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
                    <p>Written: 12th May 2024</p>
                </div>
            </div>
            
            <div>
                <h4 className='about__person__blogger'>About</h4>
                <p className='about__person__descript'>Description: Lorem ipsum is placeholder text commonly used in the graphic, print, and pub</p>
            </div>

            <div style={{ textAlign: "center", marginTop: "7px" }}>
                <MediaContactComponent />
            </div>
        </div>
    )
}
