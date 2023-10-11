import React, { useState } from 'react';

// Styles
import './styles.css';


// Component
import { SampleProjectComponent } from "../../../../Components/Projects/sample-project.component";
import { ProjectDialog } from './project-dialog.component';

export const ProjectDisplayComponent = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () =>  setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <div className='project__displayer__comp'>
            <h2 className="project__displayer__header">Projects</h2>

            <div className='display__perfectly'>
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } />
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } />
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } />
                <SampleProjectComponent display="sample" handleOpen={ handleOpen } />
            </div>

            <ProjectDialog open={ open } handleClose={ handleClose } />
        </div>
    )
}
