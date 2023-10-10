import React, { useState } from 'react';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// Drawer component from Material UI
import Drawer from '@mui/material/Drawer';

// Components
import { ItemsComponent } from './items.component';

export const NavItems = () => {

    const [open, setOpen] = useState(false);

    const items = [
        {text: "Home", link: "#home", active: true},
        {text: "About", link: "#about"},
        {text: "Skills", link: "#skills"},
        {text: "Projects", link: "#projects"},
        {text: "Blog", link: "#blog"},
    ];

    const toggleDrawer = (value) => setOpen(value);
    
    return (
        <>
            <div className='mobile__nav__view'>
                <MenuIcon onClick={ () => toggleDrawer(true) } />
                <Drawer 
                    anchor='right'
                    open={open}
                    onClose={ () => toggleDrawer(false) }
                >
                    <div className='drawer__cont'>
                        <ItemsComponent items={ items } />
                    </div>
                </Drawer>
            </div>
            
            <div  className='desktop__nav__view'>
                <ItemsComponent items={ items } />
            </div>
        </>
    )
}
