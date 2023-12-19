import React, { useRef, useEffect, useState } from 'react';

// Styling
import './styles.css';

// In view animation
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation
import 'animate.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// Axios API
import { getAllProjects } from '../../Services/API/projects.api';

// For the image slider
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Component
import { SampleProjectComponent } from './sample-project.component';

const varent = {
    visible: { animation: "tada", animationDuration: "3s", },
    hidden: {  }
  };

export const  ProjectSection = () => {

    const navigate = useNavigate();

    // Animation import use
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const [projectsData, setProjectData] = useState();

    const sliderRef = useRef(null);
    const scrollAmount = 300;


    useEffect( () => {
        getAllProjects(setProjectData);
    }, [] )

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);


    return (
        <div className="project__section" id='Projects'>
            <h3>Projects</h3>

            <div className='image__slider'>
                <ChevronLeftIcon 
                    className='nav__btn' 
                    onClick={() => {
                        const container = sliderRef.current;
                        container.scrollLeft -= scrollAmount;
                    }}
                />

                <div className="images-container" ref={sliderRef}>
                    {
                        projectsData && projectsData.map( (item, key) => (
                            <motion.div
                                ref={ref}
                                variants={varent}
                                animate={controls}
                            >
                                <SampleProjectComponent 
                                    item={ item }
                                    key={ key }
                                />
                            </motion.div>
                        )  )
                    }
                </div>

                <ChevronRightIcon 
                    className='nav__btn' 
                    onClick={() => {
                        const container = sliderRef.current;
                        container.scrollLeft += scrollAmount;
                    }}
                />
            </div>

            <button 
                className='main__btn'
                onClick={ () => navigate("/projects") }
            >Explore More</button>

        </div>
    )
}
