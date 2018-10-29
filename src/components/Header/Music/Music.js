import React, {Component} from 'react';
import css from './Music.module.css';
import mp3 from '../../../assets/audio/TheSpiritOfIreland.mp3';

class Music extends Component{
    state = {
        text: "   Irish Music!  "
    }

    componentDidMount() {
        let updatedText = this.state.text;

        this.interval = setInterval(() => {
            updatedText = updatedText.charAt(updatedText.length - 1) + updatedText.substring(0, updatedText.length-1);
            this.setState({text: updatedText})
        }, 80);
    }

    render() {
        return (
            <div className={css.Music}>
                <div className={css.IrishMusic}>{this.state.text}</div>
                <audio controls>
                    <source src={mp3} type="audio/mpeg" />
                </audio>
            </div>
        )
    }
}

export default Music;






