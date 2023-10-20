import React, { useRef, useEffect, useState } from 'react';

// Styling
import './styles.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// Axios API
import { getAllProjects } from '../../Services/API/projects.api';

// For the image slider
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Component
import { SampleProjectComponent } from './sample-project.component';

export const  ProjectSection = () => {

    const navigate = useNavigate();

    const [projectsData, setProjectData] = useState();

    const sliderRef = useRef(null);
    const scrollAmount = 300;


    useEffect( () => {
        getAllProjects(setProjectData);
    }, [] )

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
                            <SampleProjectComponent 
                                item={ item }
                                key={ key }
                            />
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
