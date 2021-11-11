import React from 'react';
import './SidebarLine.css';

function SidebarLine({ seleccionado, Icon, title }) {
    return (
        <div className={`sidebarLine ${seleccionado && 'seleccionado'}`}>
            <Icon className='sidebarLine__icon'/>
            <h2 className='sidebarLine__titulo'>{title}</h2>
        </div>
    )
}

export default SidebarLine;