import { Avatar } from '@mui/material';
import React from 'react';
import './VideoClase.css';

function VideoClase({ imagenPortada, tema, tutor, imagenTutor }) {
    return (
        <div className='videoClase'>
            <img className='videoClase__miniatura' src={imagenPortada} alt=''/>
            <div className='videoClase__about'>
                <Avatar className='videoClase__avatar' alt={tutor} src={imagenTutor}/>
                <div className='videoClase__tema'>
                    <h4>{tema}</h4>
                    <p>{tutor}</p>            
                </div>
            </div>
        </div>
    )
}

export default VideoClase;