
// Styles
import './styles.css';

// Material Icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ContactSection = () => {

    return (
        <div className="contact__section">
            <h3>Contact Me</h3>

            <div>
                <div className='message__type__cont'>
                    <input type='text' placeholder='Name' required /><br/>
                    <input type='email' placeholder='Email' required /><br/>
                    <textarea 
                        rows={5}
                        placeholder='Type Message...'
                    ></textarea><br/>

                    <button className='send__msg'>Send Message</button>
                </div>
                <div>
                    <LinkedInIcon />
                    <GitHubIcon />
                    <TwitterIcon />
                    <EmailIcon />
                </div>
            </div>
        </div>
    )
}
