
// Material UI Icons
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export const SmartNav = () => (
    <div className='smart__nav'>
        <div>
            <SmartDisplayIcon />
            <p>Video</p>
        </div>
        <div className='active__smart__nav'>
            <InsertPhotoIcon />
            <p>Picture</p>
        </div>
    </div>
)
