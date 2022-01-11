import React, {useState} from "react";
import classes from'./Contact.module.css';
import emailjs from 'emailjs-com';

//Icons
import {FaLinkedin} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
/* import {BsFillTelephoneFill} from 'react-icons/bs';
import {SiGmail} from 'react-icons/si'; */
import {BsGithub} from 'react-icons/bs';

export default function Contact(){

    const initialState = {name:"", email:"", msj:""};
    const [contact, setContact] = useState(initialState);
    const {name, email, msj} = contact;

    const [vacio, setVacio] = useState(false);

    const onChange = (e) => {
        setContact({
            ...contact, [e.target.name] : e.target.value
        })
    }

    const sendEmail = (e) => {

        e.preventDefault();


        //Validar campos vacios(usar state)
        if(name.length === 0 || email.length === 0 || msj.length === 0){

            setVacio(true);

        }else{

            emailjs.send('gmailMessage', 'template_qkgfnjo', contact, 'user_VgMcBJmDxzOtNX6c6wmKB')
                    .then((result) => {
                        alert('Mensaje enviado, me contactare lo mas pronto posible!.');
                    }, (error) => {
                        alert(error.text);
                    });

            setVacio(false);
        }

        
        
        setContact(initialState);

    }

    return(
        <section id="Contact" className={classes.Contact}>

            <div className={classes.ContainerForm}>

                <h2>Contact Me</h2>

                <form onSubmit={sendEmail}>

                    <div className={classes.ContainerInput}>
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            name="name" 
                            id="name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>


                    <div className={classes.ContainerInput}>
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="email" 
                            id="email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className={classes.ContainerInputMsj}>
                        <textarea name="msj" id="msj" value={msj} onChange={onChange} placeholder="Tu mensaje"></textarea>
                    </div>

                    {vacio &&  <div className={classes.ErrorVacio}>Complete todos los campos</div>}

                    <button className={classes.BtnMsj} type="submit">Enviar Mensaje</button>

                </form>
            </div>

            <div className={classes.Social}>

                <h3>Social</h3>

                <hr />
                
                <div className={classes.ContainerSocial}>

                    <a href="https://www.linkedin.com/in/matias-hidalgo/" rel="noreferrer" target="_blank"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/matiashidalgo11/" rel="noreferrer" target="_blank"><BsInstagram/></a>
                    <a href="https://github.com/matiashidalgo11" rel="noreferrer" target="_blank"><BsGithub/></a>

                </div>
            </div>
        </section>
    )
}