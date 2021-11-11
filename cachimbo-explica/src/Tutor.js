import { Avatar } from "@mui/material";
import React from "react";
import './Tutor.css';


function Tutor({imagenTutor, tutor, alumnos, numeroVideos, descripcion}) {
    return (
        <div className='tutor'>
            <Avatar className='tutor__logo' alt={tutor} src={imagenTutor}/>
            <div className='tutor__content'>
                <h4>{tutor}</h4>
                <p>{alumnos} alumnos - {numeroVideos} videos</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Tutor;