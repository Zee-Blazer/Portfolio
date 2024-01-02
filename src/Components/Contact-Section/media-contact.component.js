
import { Link } from 'react-router-dom';

// Material Icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const MediaContactComponent = () => (
    <div>
        <Link to="http://linkedin.com/in/bolaji-ganiyu-27043a218" className='icons__media__link'>
            <LinkedInIcon className='icons__media' />
        </Link>
        <Link to="https://github.com/Zee-Blazer" className='icons__media__link'>
            <GitHubIcon className='icons__media' />
        </Link>
        <Link to="https://x.com/G_Lyte?s=20" className='icons__media__link'>
            <TwitterIcon className='icons__media' />
        </Link>
        <Link to="mailto:ganiyu.bolaji.bo@gmail.com" className='icons__media__link'>
            <EmailIcon className='icons__media' />
        </Link>
    </div>
)
