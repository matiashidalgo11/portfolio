import NavLinks from "./NavLinks";
import classes from './NavBar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <GiHamburgerMenu className={classes.Hamburger} 
            size='40px' color='white' 
            onClick={() => setOpen(!open)}
            />

    const closeIcon = <AiOutlineClose className={classes.Hamburger} 
            size='40px' color='white' 
            onClick={() => setOpen(!open)}
            />

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={classes.MobileNavigation}>
            
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}

        </nav>
    );
}

export default MobileNavigation;