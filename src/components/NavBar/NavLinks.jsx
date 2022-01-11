import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y:-40};
    const animateTo = {opacity:1, y:0};


    return (
        
            <ul>

                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.05, type:'spring'}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to={'/'}>Sobre mi</Link>
                </motion.li>

                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.10, type:'spring'}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to={'/contact'}>Contacto</Link>
                </motion.li>

                <motion.li 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.15, type:'spring'}}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link to={'/proyects'}>Proyectos</Link>
                </motion.li>

            </ul>

    )
}

export default NavLinks;