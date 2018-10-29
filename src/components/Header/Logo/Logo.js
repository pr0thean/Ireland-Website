import React from 'react';
import css from'./Logo.module.css';
import logoImg from '../../../assets/img/logo.png';
import {NavLink} from 'react-router-dom';

const Logo = () => {
    return (
        <div className={css.Logo}>
            <NavLink to="/" activeStyle={{textDecoration: 'none'}} >
                <img alt="logo" src={logoImg} width="60px" style={{marginTop: '10px'}}/>
                <span style={{color: '#169B62', textShadow: '2px 2px 5px black'}}>Ir</span>
                <span style={{color: 'white', textShadow: '2px 2px 5px black'}}>ela</span>
                <span style={{color: '#FF893C', textShadow: '2px 2px 5px black'}}>nd</span>
            </NavLink>
        </div>
    )
    
}

export default Logo;

