import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import css from './Main.module.css';
import guinnessStorehouse from '../../assets/img/guinnessStorehouse.jpg';
import pubs2 from '../../assets/img/pubs2.jpg';
import stPatricDay from '../../assets/img/stPatricDay.jpg';
import castle from '../../assets/img/castle.jpg';

class Main extends Component {
    render () {
        return (
            <main className={css.Main}>
    
                <header>
                    <h1>Irland at a glance</h1>
                </header>
    
                <div className={css.photos}>
                    <div className={css.photo1}>
                        <Link to="/Guinness"><img src={guinnessStorehouse} alt="guinness" /></Link>
                    </div>
                    <p>Guinness Storehouse</p>
                </div>
                <div className={css.photos}>
                    <div className={css.photo2}>
                        <Link to="/Guinness"><img src={pubs2} alt="pubs" /></Link>
                    </div>
                    <p>Pubs in Dublin</p>
                </div>
                <div className={css.photos}>
                    <div className={css.photo3}>
                        <Link to="/Guinness"><img src={stPatricDay} alt="stPatricDay" /></Link>
                    </div>
                    <p>Saint Patrick's Day</p>
                </div>
                <div className={css.photos}>
                    <div className={css.photo4}>
                        <Link to="/Guinness"><img src={castle} alt="castles" /></Link>
                    </div>
                    <p>Castles</p>
                </div>

            </main>
        )
    }
}

export default Main;