import React from 'react';
import './Sidebar.css';
import SidebarLine from './SidebarLine';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PeopleIcon from '@mui/icons-material/People';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarLine seleccionado Icon={VideoLibraryIcon} title='Cursos'/> 
            <SidebarLine Icon={PeopleIcon} title='Tutores'/> 
        </div>
    )
}

export default Sidebar;