import React from "react";


//styles
import classes from './About.module.css'

//components
import img from './img/foto cv.jpeg';
import Skills from "../Skills/Skills";

//icons


export default function About(){


    return(
        <div className={classes.ContainerAbout}>

            <section id="about" className={classes.About}>
                <div className={classes.ContainerBorderAbout}>

                    <div className={classes.ContainerAbout}>

                        <div className={classes.ContainerImg}>
                            <img src={img} alt="imagen" />
                        </div>

                        <div className={classes.ContainerMe}>
                            <h3>Buenas! 🖐</h3>
                            <p>Soy un programador orientado al FullStack, me encanta programar y ademas de eso practicar deporte. Soy una persona activa y predispuesta.</p>
                            <a href="https://drive.google.com/file/d/1i1QXJ8Y5qVB4L4HATdzNe46GUGTIEZ3B/view?usp=sharing" target="_blank" className={classes.BtnResume}>Descargar CV</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <Skills/>

        </div>
    )
}