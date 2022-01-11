import React from "react";
import TypewriterComponent from "typewriter-effect";

//styles
import classes from './home.module.css'

//components
import {AiFillCaretDown} from 'react-icons/ai';
import About from "../About/About";


export default function Home(){


    return(

        <div>
            <section className={classes.Home}>

                <div className="relleno"></div>

                <div className={classes.ContainerInfoHome}>
                    <h3>Hola, soy</h3>
                    <h2>Matias Hidalgo</h2>
                    
                    <span className={classes.Fullstack}>
                        <TypewriterComponent
                        onInit={(typewriter) => {
                            typewriter
                            .typeString("-FullStack Developer-")
                            .pauseFor(2000)
                            .start()
                        }}
                        />
                    </span>
                    
                </div>

                <div className={classes.BtnHome}><AiFillCaretDown className={classes.AiFillCaretDown}/></div>

            </section>

             <About/>

        </div>
    )
}