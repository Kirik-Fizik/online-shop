import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/main.css'

function Header() {


    return (
        <div>
            <header class='header'>
                <Link className='element' to='/'><div class='header_title'>TAKEAVTO</div></Link>
                <Link className='element' to='/' ><div>Автопарк</div></Link>
                <Link className='element' to='/contacts'><div>Контакты</div></Link>
            </header>
            <Outlet/>
        </div>
    )
}

export default Header;