import React, { useState, useEffect } from 'react';

// Styles
import './styles.css';

// Navigation
import { useNavigate } from 'react-router-dom';

// Backend API
import { getAllProjects } from '../../../../Services/API/projects.api';

// Component
import { SampleProjectComponent } from "../../../../Components/Projects/sample-project.component";
import { ProjectDialog } from './project-dialog.component';

export const ProjectDisplayComponent = ({ type }) => {

    const navigate = useNavigate();

    const [projectData, setProjectData] = useState();

    const [open, setOpen] = useState(false);

    const handleOpen = () =>  setOpen(true);

    const handleClose = () => setOpen(false);

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
