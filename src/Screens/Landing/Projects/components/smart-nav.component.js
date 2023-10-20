
// Material UI Icons
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export const SmartNav = ({ currentNav, setCurrentNav }) => (
    <div className='smart__nav'>
        <div 
            onClick={ () => setCurrentNav("Video") }
            className={ currentNav === "Video" && 'active__smart__nav' }
        >
            <SmartDisplayIcon />
            <p>Video</p>
        </div>
        <div 
            onClick={ () => setCurrentNav("Picture") } 
            className={ currentNav === "Picture" && 'active__smart__nav' }
        >
            <InsertPhotoIcon />
            <p>Picture</p>
        </div>
    </div>
)
