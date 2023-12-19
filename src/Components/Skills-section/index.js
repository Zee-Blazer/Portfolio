import React, { useEffect } from 'react';

// Styles
import './styles.css';

// In view animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation
import 'animate.css';

// Component
import { IconDisplayer } from './icons-displayer';

const varent = {
    visible: { animation: "wobble", animationDuration: "3s", },
    hidden: {  }
  };

export const SkillsSection = (props) => {

    const controls = useAnimation();
    const [ref, inView] = useInView();

    const skills = [
        {Icon: "HTML", text: "HTML"},
        {Icon: "CSS", text: "CSS"},
        {Icon: "Bootstrap", text: "Bootstrap"},
        {Icon: "Javascript", text: "JavaScript"},
        {Icon: "Python", text: "Python"},
        {Icon: "React", text: "React"},
        {Icon: "Firebase", text: "Firebase"},
        {Icon: "Express", text: "Express JS"},
        {Icon: "Node", text: "Node JS"},
        {Icon: "Mongodb", text: "MongoDB"},
    ];

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

    return (
        <div className="skills__section" id='Skills'>
            <h3>My Skills</h3>

            <div className='skills__display'>
                { skills.map( (item) => {
                    return <motion.div
                        ref={ref}
                        variants={varent}
                        animate={controls}
                    ><IconDisplayer item={ item } /></motion.div>
                } ) }
            </div>
        </div>
    )
}
