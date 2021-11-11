import React from 'react';
import './SearchVideo.css';
import TuneIcon from '@mui/icons-material/Tune';
import Tutor from './Tutor';
import VideoLine from './VideoLine';

function SearchVideo() {
    return (
        <div className='searchVideo'>
            <div className='searchVideo__filter'>
                <TuneIcon />
                <h2>CUENTAME QUE FILTRAR</h2>
            </div>
            <hr/>
            <Tutor 
              imagenTutor='https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170508900/77702470-dise%C3%B1o-casual-del-ejemplo-del-vector-del-avatar-del-hombre-joven.jpg'
              tutor='Gabriel Francis'
              alumnos='23'
              numeroVideos={4}
              descripcion='Profesor asistente del curso de Calculo Diferencial de la Facultad de Ciencias de la Universidad Nacional de Ingenieria'
            />
            <hr/>
            <VideoLine 
              imagenPortada='https://i.ibb.co/MCVp27m/portada-Video-Clase.jpg'
              tutor='Gabriel Francis'
              alumnos='23'
              tema='Introduccion al Calculo Diferencial'
              descripcion='Clase con los temas previos a conocer para el mejor desenvolvimiento del alumno en el curso.'
            />
            <VideoLine 
              imagenPortada='https://i.ibb.co/MCVp27m/portada-Video-Clase.jpg'
              tutor='Gabriel Francis'
              alumnos='23'
              tema='Introduccion al Calculo Diferencial'
              descripcion='Clase con los temas previos a conocer para el mejor desenvolvimiento del alumno en el curso.'
            />
        </div>
    )
}

export default SearchVideo;