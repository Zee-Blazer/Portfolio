
// Styling
import './styles.css';

// Images
import AboutPic from '../../Images/About-Pic.png';
import Shape3 from '../../Images/Ellipse-3.png';

export const AboutComponent = () => {

    return (
        <div className='about__section'>
            <img src={AboutPic} className='about__pic' />
            
            <div className='about__division__section'>

                <div className='about__me__text'>
                    <h3>About Me</h3>

                    <div className='div__align'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Tempus quam pellentesque nec nam aliquam sem. Hendrerit dolor magna eget est lorem ipsum dolor. Sit amet massa vitae tortor condimentum lacinia. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dui sapien eget mi proin sed libero enim sed faucibus. Lectus urna duis convallis convallis tellus. Sit amet venenatis urna cursus eget nunc. Et molestie ac feugiat sed lectus vestibulum mattis. Lacus luctus accumsan tortor posuere ac ut consequat semper. Urna molestie at elementum eu. Pulvinar elementum integer enim neque volutpat. Nisl nunc mi ipsum faucibus vitae aliquet. Cursus turpis massa tincidunt dui ut. Egestas erat imperdiet sed euismod nisi porta. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. In egestas erat imperdiet sed euismod nisi porta.
                        </p>

                        <button className='cv__download'>Download CV</button>
                    </div>
                </div>

                <img src={ Shape3 } className='green__shape' />
            </div>
        </div>
    )
}
