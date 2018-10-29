import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import css from './App.module.css';
import Guinness from './components/Guiness/Guiness';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';
import ContactForm from './components/Header/Contact/ContactForm/ContactForm';

class App extends Component {
  state = {
    backgroundImage: "url(" + require('./assets/img/ireland1.jpg') +")",
    index: 1
  }

  slider() {
    this.setState( prevState => ({
      index: prevState.index + 1,
      backgroundImage: "url(" + require('./assets/img/ireland'+ this.state.index +'.jpg') +")",
    }));

    if(this.state.index === 7)
      this.setState({ index: 1 });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.slider(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {

    return (
      <BrowserRouter>
        <div className={css.App} style={{backgroundImage: this.state.backgroundImage}}>
            <div className={css.Content}>
              <Header />
              <br></br>
              <Route exact path="" component={Main} />
              <Route path="/Guinness" component={Guinness} />
              <Route path="/ContactUs" component={ContactForm} />
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
