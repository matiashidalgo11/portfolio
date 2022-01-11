import React, {  useState } from "react";
import TypewriterComponent from "typewriter-effect";

//styles
import classes from './home.module.css'

//components
import {AiFillCaretDown} from 'react-icons/ai';
import About from "../About/About";

export default function Home(){

    const[isAbout, setAbout] = useState(false);

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

                <div className={classes.BtnHome} onClick={() => {setAbout(true)}}> <a href="/#about"><AiFillCaretDown className={classes.AiFillCaretDown}/></a></div>

            </section>

            {isAbout && <About/>}

        </div>
    )
}