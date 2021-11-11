import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    const [inputBuscar, setInputBuscar] = useState('');

    return (
        <div className='header'>
            {/* <h1>I am a header</h1> */}
            <div className='header__izq'>
                <MenuIcon />
                <Link to='/'>
                    <img 
                        className='header__logo'
                        src=''
                        alt='logo'
                    />
                </Link>
            </div>
            
            <div className='header__input'>
                <input 
                    onChange={e => setInputBuscar(e.target.value)} 
                    value={inputBuscar} placeholder='Buscar' type='text' />
                <Link to={`/search/${inputBuscar}`}>
                    <SearchIcon className='header__searchButton'/>
                </Link>
            </div>

            <div className='header__profile'>
                <AddIcon className='header__icon'/>
                {/* <NotificationsIcon className='header__icon'/> */}
                <Avatar alt='Carlos Rodriguez'
                src='https://logodix.com/logo/1862317.png'/>
            </div>            
        </div>
    )
}

export default Header;