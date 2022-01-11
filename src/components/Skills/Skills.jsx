import React from "react";
import classes from'./Skills.module.css';

//Icons
import css from './img/css-3.svg'
import html from './img/html-1.svg'
import java from './img/java-4.svg'
import js from './img/logo-javascript.svg'
import mysql from './img/mysql-3.svg'
import php from './img/php-1.svg'
import react from './img/react-2.svg'


export default function Skills(){

    return(
        <section id="Skills" className={classes.Skills}>

            <div className={classes.Container}>
                <h2>Skills</h2>
                <hr />
                <div className={classes.ContainerSkills}>
                    <div className={classes.ContainerSkill}>
                        <img src={css} alt="" />
                        <h3>CSS</h3>
                    </div>
                    <div className={classes.ContainerSkill}>
                        <img src={html} alt="" />
                        <h3>HTML</h3>
                    </div>
                    <div className={classes.ContainerSkill}>
                        <img src={java} alt="" />
                        <h3>JAVA</h3>
                    </div>
                    <div className={classes.ContainerSkill}>
                        <img src={js} alt="" />
                        <h3>JavaScript</h3>
                    </div>
                    <div className={classes.ContainerSkill}>
                        <img src={mysql} alt="" />
                        <h3>MySql</h3>
                    </div>
                    <div className={classes.ContainerSkill}>
                        <img src={php} alt="" />
                        <h3>PHP</h3>
                    </div>
                    <div className={classes.ContainerSkill}>
                        <img src={react} alt="" />
                        <h3>React</h3>
                    </div>
                </div>
            </div>
            
        </section>
    )
}