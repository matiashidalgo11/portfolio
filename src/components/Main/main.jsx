import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

//styles
import './main.css'

//components
import Home from "../Home/home";
import Contact from "../Contact/Contact";
import NavBar from '../NavBar/NavBar.jsx';
import Proyectos from "../Proyectos/Proyectos";
import Footer from "../Footer/Footer";


export default function Main(){
    return(

        <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route index exact patch="/" element={<Home/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                <Route exact path="/proyects" element={<Proyectos/>}/>
            </Routes>
            
            <Footer/>
            
        </BrowserRouter>

    )
}