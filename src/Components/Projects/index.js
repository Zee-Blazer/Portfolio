import React, { useRef, useState } from 'react';

// Styling
import './styles.css';

// Image
import Product from '../../Images/pro-duct.png';

// For the image slider
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const  ProjectSection = () => {

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
        <div className="project__section">
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
                        <div 
                            className='image__display'
                            key={index}
                            style={{ backgroundImage: `url(${Product})` }}
                        >

                            <div className='display__bg'>
                                <h2>Project Name</h2>

                                <div className='tools__display'>
                                    { image.tool.map( item => (
                                        <p>{ item }</p>
                                    ) ) }
                                </div>

                                <p className='spec__display__cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum neque egestas congue quisque. Tempus quam pellentesque nec nam aliquam sem. Hendrerit dolor magna eget est lorem ipsum dolor. Sit amet massa vitae tortor condimentum lacinia. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Dui sapien eget mi proin sed libero enim sed faucibus.</p>
                                
                                <div className='inside__btn'>
                                    <button>Visit</button>
                                    <button>Code</button>
                                    <button>Video/Picture</button>
                                </div>

                            </div>

                        </div>
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

            <button className='main__btn'>Explore More</button>

        </div>
    )
}
