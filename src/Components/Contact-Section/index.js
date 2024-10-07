import React, { useState } from 'react';

// Styles
import './styles.css';

// API
import { sendMsg } from '../../Services/API/send-msg.ap';

// Component
import { MediaContactComponent } from './media-contact.component';

export const ContactSection = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [err, setErr] = useState();

    const importantMsg = () => {
        name && email && message ? 
            sendMsg({ name, email, message, setName, setEmail, setMessage, setErr }) : 
            setErr("Please completely fill details");
    }

    return (
        <div className="contact__section" id="Contact">
            <h3>Contact Me</h3>

            <p className='err__message'>{ err }</p>

            <div>
                <div className='message__type__cont'>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        required 
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    /><br/>

                    <input 
                        type='email' 
                        placeholder='Email' 
                        required 
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    /><br/>

                    <textarea 
                        required
                        rows={5}
                        placeholder='Type Message...'
                        value={ message }
                        onChange={ e => setMessage(e.target.value) }
                    ></textarea><br/>

                    <button 
                        className='send__msg'
                        onClick={ importantMsg }
                    >Send Message</button>
                </div>
                <MediaContactComponent />
            </div>
        </div>
    )
}
