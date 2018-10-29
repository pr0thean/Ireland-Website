import React, {Component} from 'react';
import css from './Contact.module.css';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
    state = {
        display: 'translateY(-100vh)',
        opacity: 0
    }

    showFormHandler = () => {
        if(this.state.display === 'translateY(-100vh)')
            this.setState({display: 'translateY(0)', opacity: 1});
        else
            this.setState({display: 'translateY(-100vh)', opacity: 0});
    }

    render() {
        return (
            <div className={css.Contact}>
                <div>
                    <p>Need a place to stay?  Want to buy a trip?</p>
                    <p>Need any help or information about Ireland?</p>
                    <button onClick={this.showFormHandler} type="button" name="contact">CONTACT US!</button>
                </div>
                <div className={css.ContactForm} style={{transform: this.state.display, opacity: this.state.opacity}}>
                    <ContactForm />
                </div>
            </div>
        )
    }
}

export default Contact;