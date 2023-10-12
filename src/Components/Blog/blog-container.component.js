
// Material UI Icon
import DeleteIcon from '@mui/icons-material/Delete';

// Image
import Blog0 from '../../Images/blog-0.png';

export const BlogContainerComponent = ({ type, state }) => {

    return (
        <div className='blog__item__cont'>
            <img src={ Blog0 } className='blog__img__placeholder' />
            <div className='blog__header'>
                <h4>Blog Title: The return into the tech era with fant abu lous skills</h4>
                <p>
                    12th May 2024
                    { type == "Dashboard" && <span className='delete__blog__icon'>Delete</span> }
                </p>
            </div>
            <p className='blog__descrip__text'>Description: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

            <div style={{ textAlign: "center" }}>
                <button 
                    className='read__blog' 
                    style={{ backgroundColor: `${state == "Draft" && "#FDB60E"}`}}
                >
                    { state == "Draft" ? 'Draft' : "Read" }
                </button>
            </div>
        </div>
    )
}
