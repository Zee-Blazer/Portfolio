
// Material UI component
import Dialog from '@mui/material/Dialog';

// Component
import { SmartNav } from './smart-nav.component';
import { DiskCont } from './disk-cont.component';

export const ProjectDialog = ({ open, handleClose }) => {

    return (
        <Dialog
            open={ open }
            onClose={ handleClose }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className='project__dialog__box'>
                <SmartNav />

                <DiskCont />
            </div>
        </Dialog>
    )
}
