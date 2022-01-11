import React from 'react';
import './Proyectos.css';

export default function Proyecto ({proyecto}){

    const {titulo, img, modalidad, fecha, descripcion, deploy, github} = proyecto;

    return(

        <li className='proyecto'>

            <div className="container-proyecto-img">

                <img src={img} alt="imagen ejemplo" />

            </div>

            <div className="proyecto-info">

                <h3>{titulo}</h3>

                <div className="container-formato-proyecto">

                    <p><span>Fecha: </span>{fecha}</p>

                    <p><span>Modalidad: </span>{modalidad}</p>

                </div>

                

                <p className='proyecto-descripcion'>{descripcion}</p>

                <div className="container-btn-proyecto">

                    <a href={deploy} rel="noreferrer" target="_blank"><button className='btn-proyecto'>Deploy</button></a>
                    <a href={github} rel="noreferrer" target="_blank"><button className='btn-proyecto'>Github</button></a>

                </div>
            </div>
            
            
        </li>

    )
}