import React from "react";
import { Fragment } from "react/cjs/react.development";

//styles
import classes from './About.module.css'

//components
import img from './img/foto cv.jpeg';
import Skills from "../Skills/Skills";

//icons


export default function About(){
  

    return(
        <Fragment>

            <section id="about" className={classes.About}>
                <div className={classes.ContainerBorderAbout}>

                    <div className={classes.ContainerAbout}>

                        <div className={classes.ContainerImg}>
                            <img src={img} alt="imagen" />
                        </div>

                        <div className={classes.ContainerMe}>
                            <h3>Buenas! 🖐</h3>
                            <p>Soy un programador horientado al FullStack, me encanta programar y ademas de eso practicar deporte. Soy bastante activo y predispuesto.</p>
                            <a href="https://drive.google.com/file/d/1fTn8IuaFL3rMVi3B2QApsoLVb2QalLOg/view?usp=sharing" rel="noreferrer" target="_blank" className={classes.BtnResume}>Descargar CV</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <Skills/>

        </Fragment>
    )
}