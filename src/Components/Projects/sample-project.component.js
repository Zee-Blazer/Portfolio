
// Image
import Product from '../../Images/pro-duct.png';

export const SampleProjectComponent = ({ image, index, display, handleOpen }) => {

    return (
        <div 
            className={ display === "sample" ? "image__display fixed__display" : 'image__display' }
            key={index && index}
            style={{ backgroundImage: `url(${Product})`, backgroundRepeat: 'no-repeat' }}
        >

            <div className='display__bg'>
                <h2>Project Name</h2>

                <div className='tools__display'>
                    { image && image.tool.map( item => (
                        <p>{ item }</p>
                    ) ) }
                </div>

                <p className='spec__display__cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Tempus quam pellentesque nec nam aliquam sem. Hendrerit dolor magna eget est lorem ipsum dolor. Sit amet massa vitae tortor condimentum lacinia. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dui sapien eget mi proin sed libero enim sed faucibus.</p>
                
                <div className='inside__btn'>
                    <button>Visit</button>
                    <button>Code</button>
                    <button onClick={ () => display === "sample" && handleOpen() }>Video/Picture</button>
                </div>

            </div>
        </div>

    )
}
