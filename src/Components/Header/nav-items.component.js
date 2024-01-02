import React, { useState } from 'react';

// Icons
import MenuIcon from '@mui/icons-material/Menu';

// Drawer component from Material UI
import Drawer from '@mui/material/Drawer';

// Components
import { ItemsComponent } from './items.component';

export const NavItems = ({ type }) => {

    const [open, setOpen] = useState(false);

    const items = [
        {text: "Home", link: "/#Home", active: true},
        {text: "About", link: "/#About"},
        {text: "Skills", link: "/#Skills"},
        {text: "Projects", link: "/#Projects"},
        {text: "Contact", link: "/#Contact"},
        {text: "Blog", link: "/#Blog"},
    ];

    const dashItems = [
        {text: "About", link: ""},
        {text: "Projects", link: "/dashboard/projects"},
        {text: "Blog", link: "/dashboard/blogs"},
        {text: "Messages", link: "/dashboard/all-messages"},
    ]

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
                        <ItemsComponent 
                            items={ type === "Dashboard" ? dashItems : items } 
                            type={ type } 
                        />
                    </div>
                </Drawer>
            </div>
            
            <div  className='desktop__nav__view'>
                <ItemsComponent 
                    items={ type === "Dashboard" ? dashItems : items } 
                    type={ type } 
                />
            </div>
        </>
    )
}
