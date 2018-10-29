import React from 'react';
import css from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [css.Input];

    if(props.invalid && props.touched) {
        inputClasses.push(css.Invalid);
    }

    switch(props.elementtype) {
        case ('input'):
            inputElement = <input 
                className={inputClasses.join(' ')} 
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
        break;
        case ('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                style={{height: '150px'}} 
                value={props.value}
                onChange={props.changed} />
        break;
        default:
            inputElement = null;
        break;
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default input;