import React from 'react';
import '../assets/styles/components/Header.scss'
import logo from '../assets/statics/logo.jpg'

const Header = () => (
        <header className='header'>
            <picture className='header__pic'>
                <source/>
                <img className='header__pic-logo' src={logo} alt=""/>
            </picture>
        </header>
)

export default Header