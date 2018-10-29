import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Guinness.module.css';

import guinnessImg from '../../assets/img/guinness1.jpg';

const Guinness = () => {
    return (
        <div className={css.Content}>
            <h1>Guinness Storehouse</h1>

            <div className={css.TextImg}>
                <div  className={css.Text}>
                    <p>Guinness Storehouse is a tourist attraction at St. James's Gate Brewery in Dublin, Ireland. Since opening in 2000, it has received over four million visitors.</p>

                    <p>The Guinness Storehouse explains the history of Beer. The story is told through various interactive exhibition areas including ingredients, brewing, transport, cooperage, advertising and sponsorship.</p>

                    <p>At the base of the atrium lies a copy of the 9,000 year lease signed by Arthur Guinness on the brewery site. In the Perfect Pint bar, visitors may pour their own pint of Guinness. The Brewery Bar on the fifth floor offers Irish cuisine, using Guinness both in the cooking and as an accompaniment to food.</p>
                </div>  

                <img alt="guinness" src={guinnessImg} />
            </div>
            

            <p className={css.Arrow}><NavLink to=""><i className="icon-left"></i></NavLink></p>
        </div>
    );
}

export default Guinness;