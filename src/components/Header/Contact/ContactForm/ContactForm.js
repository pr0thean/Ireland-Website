import React, {Component} from 'react';
import css from './ContactForm.module.css';
import axios from '../../../../axios';
import Input from '../../../UI/Input';
import Spinner from '../../../UI/Spinner';

class ContactForm extends Component {
    state = {
        inputs: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                    length: 2,
                    name: 'name'
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your E-Mail',
                },
                value: '',
                validation: {
                    required: true,
                    length: 5,
                    mail: 'mail'
                },
                valid: false,
                touched: false
            },
            topic: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Topic',
                },
                value: '',
                validation: {
                    required: true,
                    length: 2,
                    topic: 'topic'
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Message',
                },
                value: '',
                validation: {
                    required: true,
                    length: 2
                },
                valid: false,
                touched: false
            }
        },
        displayParagraph: 'none',
        sendMessage: '',
        formValid: false,
        date: '',
        loading: false
    }

    checkValidity = (value, validationRule) => {
        let isValid = true;

        if(validationRule.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(validationRule.length) {
            isValid = value.length >= validationRule.length && isValid;
        }

        if(validationRule.name) {
            let regExp = /^([A-Za-z]){2,15}(\s([A-Za-z]){1,20})*$/;
            isValid = regExp.test(value) && isValid;
        }

        if(validationRule.topic) {
            let regExp = /^([A-Za-z0-9.\-_?!=%$]){1,15}(\s([A-Za-z0-9.\-_?!=%$]){1,15})*$/;
            isValid = regExp.test(value) && isValid;
        }

        if(validationRule.mail) {
            let regExp = /^([A-Za-z0-9_.]){1,}@([A-Za-z]){1,}\.([A-Za-z]{2,4})$/;
            isValid = regExp.test(value) && isValid;    

            // ^ początek   $ koniec
            // ([A-Za-z0-9_.]){1,} conajmniej 1 znak z wymienionych
            // (\s([A-Za-z]){2,10})* moze ale nie musi wystąpić
        }

        return isValid;
    }

    inputsChangeHandler = (event, inputName) => {
        const updatedInputs = {
            ...this.state.inputs
        };
        const updatedInputsElement = {
            ...updatedInputs[inputName]
        };
        updatedInputsElement.value = event.target.value;
        updatedInputsElement.valid = this.checkValidity(updatedInputsElement.value, updatedInputsElement.validation);
        updatedInputsElement.touched = true;

        updatedInputs[inputName] = updatedInputsElement;

        let formValid = true;
        for(let inputName in updatedInputs) {
            formValid = updatedInputs[inputName].valid && formValid;
        }

        this.setState({inputs: updatedInputs, formValid: formValid, displayParagraph: 'none'});
    }

    getDate() {
        let date = new Date();

        let hour = date.getHours();
        let minutes = date.getMinutes();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();

        if(hour < 10)
            hour = '0' + hour;
        if(minutes < 10)
            minutes = '0' + minutes;
        if(day < 10)
            day = '0' + day;
        if(month < 10)
            month = '0' + month;

        const fullDate = `${hour}:${minutes} ${day}/${month}/${year}`;

        return fullDate;
    }

    sendMessage = () => {  
        this.setState({ loading: true });

        const message = {};
        for(let element in this.state.inputs) {
            message[element] = this.state.inputs[element].value;
        }

        const messageToDatabase = {
            message: message,
            date: this.getDate()
        }

        axios.post('/messages.json', messageToDatabase)
            .then(res => {
                this.setState({ 
                    displayParagraph: 'initial',
                    sendMessage: "Message successfully sent. We will answer ASAP :)",
                    loading: false
                });
            })
            .catch(err => { this.setState({ sendMessage: 'Some error occured :(' }) });
        
        const updatedInputs = {
            ...this.state.inputs
        };
        for(let element in updatedInputs) {
            const updatedInputsElement = {
                ...updatedInputs[element]
            };
            updatedInputsElement.value = '';
            updatedInputs[element] = updatedInputsElement;

            this.setState({ inputs: updatedInputs })
        } 
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.inputs) {
            formElementsArray.push({
                id: key,
                config: this.state.inputs[key]
            });
        }

        let infoMessage = <p style={{display: this.state.displayParagraph}}>{this.state.sendMessage}</p>
        if(this.state.loading) {
            infoMessage = <Spinner />
        }

        return (
            <form className={css}  >
                <div className={css.Content}>
                    {formElementsArray.map(formElement => (
                        <Input 
                            key={formElement.id}
                            elementtype={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                            onFocus={e => e.target.placeholder=""} 
                            onBlur={e => e.target.placeholder=formElement.config.placeholder}
                            changed={e => this.inputsChangeHandler(e, formElement.id)} />
                    ))}
    
                    <button disabled={!this.state.formValid} onClick={this.sendMessage} type="button" name="send">Send</button>
                    <br></br>
                    {infoMessage}
                </div>
    
            </form>
        )
    }
}

export default ContactForm;