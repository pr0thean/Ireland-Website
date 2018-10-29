import React, { Component } from 'react';
import css from './Header.module.css';
import Logo from '../../components/Header/Logo/Logo';
import Music from '../../components/Header/Music/Music';
import Contact from '../../components/Header/Contact/Contact';


class Header extends Component {
    render () {
        return (
            <header>
                <div className={css.headerItems}>
                    <div className={css.Music}>
                        <Music />
                    </div>
                    <Logo />
                    <Contact />
                </div>
            </header>
        )
    }
}

export default Header;