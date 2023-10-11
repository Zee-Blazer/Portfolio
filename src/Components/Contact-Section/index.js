
// Styles
import './styles.css';

// Component
import { MediaContactComponent } from './media-contact.component';

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
                <MediaContactComponent />
            </div>
        </div>
    )
}
