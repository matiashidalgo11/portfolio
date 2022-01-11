//img
import starwars from './img/starwarsapi.jpg';
import portfolio from './img/portfolio.jpg';


const dataProyectos = [

    {
        titulo:"StarWars Api React", 
        img:starwars, modalidad:"Grupo", 
        fecha:"2021", 
        descripcion:"Aplicacion basada en la saga de StarWars. Fue hecha completamente con React, en la cual podes registrarte y podes agregar Vehiculos o Personajes ademas de editarlos.", 
        deploy:"https://star-wars-app-react-bootcamp.herokuapp.com/", 
        github:"https://github.com/RomanOliva10/StarWars-Project"
    },

    {
        titulo:"Portfolio", 
        img:portfolio, 
        modalidad:"Individual", 
        fecha:"2022", 
        descripcion:"Portfolio personal creado con React.", 
        deploy:"https://matias-hidalgo-portfolio.netlify.app/", 
        github:"https://github.com/matiashidalgo11/portfolio.git"
    }


]

export default dataProyectos;