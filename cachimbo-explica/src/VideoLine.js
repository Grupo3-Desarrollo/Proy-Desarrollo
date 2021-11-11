import React from "react";
import './VideoLine.css';


function VideoLine({imagenPortada, tutor, alumnos, tema, descripcion}) {
    return (
        <div className='videoLine'>
            <img  src={imagenPortada} alt=''/>
            <div className='videoLine__content'>
                <h3>{tema}</h3>
                <p className='videoLine__tutor'>
                    {tutor} - {alumnos} alumnos
                </p>
                <p className='videoLine__descripcion'>{descripcion}</p>
            </div>
        </div>
    )
}

export default VideoLine;