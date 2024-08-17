import React, { useContext } from 'react';

// Material UI Icon
import BackspaceIcon from '@mui/icons-material/Backspace';

// Navigation
import { useNavigate, Link } from 'react-router-dom';

// Context
import { MediaDisplayContext } from '../../Services/Context/media-display.context';

// Image
import Product from '../../Images/pro-duct.png';

export const SampleProjectComponent = ({ display, handleOpen, type, item, key }) => {

    const navigate = useNavigate();

    const { setData } = useContext(MediaDisplayContext);

    const actionPerform = () => {
        if(display === "sample"){
            handleOpen();
            setData(item);
        } 
        else{
            navigate("/projects")
        }
    }

    // This code limits the sentence lines to just 50 words
    const limitWords = (data) => data.split(' ').length > 50 ? data.split(' ').slice(0, 50).join(' ') + '...' : data

    return (
        <div 
            className={ display === "sample" ? "image__display fixed__display" : 'image__display' }
            key={ key }
            style={{ 
                backgroundImage: `url(${item.coverPhoto ? item.coverPhoto : Product})`, 
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover"
            }}
        >

            <div className='display__bg'>
                <h2>{ item.name }</h2>

                <div className='tools__display'>
                    { item.techStack && item.techStack.map( item => (
                        <p>{ item }</p>
                    ) ) }
                </div>

                <p className='spec__display__cont'>
                    { limitWords(item.description) }    
                </p>
                
                <div className='inside__btn'>
                    <Link to={ item.site }><button>Visit</button></Link>
                    <Link to={ item.git }><button>Code</button></Link>
                    <button 
                        onClick={ actionPerform }
                    >Video/Picture</button>
                    { type === "Dashboard" && <BackspaceIcon className='backspace__icon' /> }
                </div>

            </div>
        </div>

    )
}
