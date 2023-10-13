import React, { useState } from 'react';

// Styles
import './styles.css';

// Component
import { SampleProjectComponent } from "../../../../Components/Projects/sample-project.component";
import { ProjectDialog } from './project-dialog.component';

export const ProjectDisplayComponent = ({ type }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () =>  setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <div className='project__displayer__comp'>
            <h2 className="project__displayer__header">
                Projects 
                <span className='style__span'>{ type === "Dashboard" && "Add" }</span>
            </h2>

            <div className='display__perfectly'>
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } type={ type } />
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } type={ type } />
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } type={ type } />
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } type={ type } />
            </div>

            <ProjectDialog open={ open } handleClose={ handleClose } />
        </div>
    )
}
