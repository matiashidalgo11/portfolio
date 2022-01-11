import React from 'react';
import './Proyectos.css';
import {motion} from 'framer-motion';

//components
import ListaProyectos from './ListaProyectos';

//data
import dataProyectos from './dataProyectos';

export default function Proyectos (){

    const animateFrom = {opacity: 0, x:-100};
    const animateTo = {opacity:1, x:0};

    return(

        <section id='proyects' className='Proyectos'>
            
            <motion.div 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay:0.10, type:'Tween'}}
                className='title-section-proyect'>
                <h2>Proyectos</h2>
            </motion.div>

            <div className="container-lista-proyectos">

                <ListaProyectos data={dataProyectos}/>


            </div>



        </section>
    )
}