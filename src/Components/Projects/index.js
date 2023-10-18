import React, { useRef } from 'react';

// Styling
import './styles.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// For the image slider
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Component
import { SampleProjectComponent } from './sample-project.component';

export const  ProjectSection = () => {

    const navigate = useNavigate();

  const sliderRef = useRef(null);
  const scrollAmount = 300;

    const images = [
        {
            url: "../../Images/pro-duct.png",
            caption: "Slider 1",
            tool: [ "React", "Firebase", "MongoDB", "Express" ]
        },
        {
            url: "../../Images/pro-duct.png",
            caption: "Slider 2",
            tool: [ "React", "Firebase", "MongoDB", "Express" ]
        },
        {
            url: "../../Images/pro-duct.png",
            caption: "Slider 3",
            tool: [ "React", "Firebase", "MongoDB", "Express" ]
        },
        {
            url: "../../Images/pro-duct.png",
            caption: "Slider 4",
            tool: [ "React", "Firebase", "MongoDB", "Express" ]
        }
    ]

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
                    {images.map((image, index) => (
                        <SampleProjectComponent image={ image } index={ index } />
                    ) )}
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
