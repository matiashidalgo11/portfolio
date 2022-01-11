import React from 'react';
import './Proyectos.css';

//components
import Proyecto from './Proyecto';

export default function ListaProyectos ({data}){

    return(

        <ul className='listado-proyectos'>

            {data.map((proyecto, indx) => (

                <Proyecto key={indx} proyecto={proyecto}/>

            ))}
            

        </ul>

    )
}