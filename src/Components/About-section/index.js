import React, { useEffect } from 'react';

// Styling
import './styles.css';

import { Link } from 'react-router-dom';

// In view animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation
import 'animate.css';

// Images
import AboutPic from '../../Images/About-Pic.png';
import Shape3 from '../../Images/Ellipse-3.png';

const varent = {
    visible: { animation: "swing", animationDuration: "2s", },
    hidden: {  }
  };

export const AboutComponent = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
        <motion.div 
            className='about__section animate__animated animate__fadeIn' id='About'
            ref={ref}
            variants={varent}
            animate={controls}
        >
            <img src={AboutPic} className='about__pic' />
            
            <div className='about__division__section'>

                <div className='about__me__text'>
                    <h3>About Me</h3>

                    <div className='div__align'>
                        <p>
                        Hello there! 👋 I'm Bolaji, a passionate software engineer based in Nigeria, navigating the vast realms of the MERN stack. A relentless learner, I'm on a quest to continuously grow my skills and shape my career. Beyond coding, I harbor ambitions of building my own empire. Join me on this exciting journey as we turn lines of code into impactful innovations. Let's create, innovate, and build something extraordinary together. Welcome to my world of endless possibilities! 🚀
                        </p>

                        <Link to="https://drive.google.com/file/d/193MZJ7fGo6rMJRRaSfW0_mQ8Chd-JpZg/view?usp=drive_link" className='cv__download'>Download CV</Link>
                    </div>
                </div>

                <img src={ Shape3 } className='green__shape' />
            </div>
        </motion.div>
    )
}
