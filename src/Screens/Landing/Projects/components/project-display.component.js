import React, { useState, useEffect, useContext } from 'react';

// Styles
import './styles.css';

// Context 
import { MediaDisplayContext } from '../../../../Services/Context/media-display.context';

// Navigation
import { useNavigate } from 'react-router-dom';

// Backend API
import { getAllProjects } from '../../../../Services/API/projects.api';

// Component
import { SampleProjectComponent } from "../../../../Components/Projects/sample-project.component";
import { ProjectDialog } from './project-dialog.component';

export const ProjectDisplayComponent = ({ type }) => {

    const navigate = useNavigate();

    const { setVideoPlay, setPicShow } = useContext(MediaDisplayContext);

    const [projectData, setProjectData] = useState();

    const [open, setOpen] = useState(false);

    const handleOpen = () =>  setOpen(true);

    const handleClose = () => {
        setOpen(false);
        setPicShow();
        setVideoPlay();
    }

    useEffect( () => {
        getAllProjects(setProjectData);
    }, [] )

    return (
        <div className='project__displayer__comp'>
            <h2 className="project__displayer__header">
                Projects 
                <span 
                    className='style__span'
                    onClick={ () => navigate("/dashboard/add-project") }
                >{ type === "Dashboard" && "Add" }</span>
            </h2>

            <div className='display__perfectly'>

                { projectData && projectData.map( ( item, key ) => {
                    // console.log(item);

                    return (
                        <SampleProjectComponent 
                            display="sample" 
                            handleOpen={ handleOpen } 
                            type={ type } 
                            item={ item }
                            key={ key }
                        />
                    )
                } ) }
            </div>

            <ProjectDialog open={ open } handleClose={ handleClose } />
        </div>
    )
}
