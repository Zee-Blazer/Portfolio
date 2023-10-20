import React, { useState } from 'react';

// Material UI component
import Dialog from '@mui/material/Dialog';

// Component
import { SmartNav } from './smart-nav.component';
import { DiskCont } from './disk-cont.component';

export const ProjectDialog = ({ open, handleClose }) => {

    const [currentNav, setCurrentNav] = useState("Picture");

    return (
        <Dialog
            open={ open }
            onClose={ handleClose }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className='project__dialog__box'>
                <SmartNav currentNav={ currentNav } setCurrentNav={ setCurrentNav } />

                <DiskCont currentNav={ currentNav } />
            </div>
        </Dialog>
    )
}
