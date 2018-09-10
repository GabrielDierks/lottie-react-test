import React, {Component} from 'react';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './reactLogo.json'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {
        const buttonStyle = {backgroundColor: 'lightgreen'};
        const buttonAltStyle = {backgroundColor: 'red'};
        const buttonPauseStyle = {display: 'inline-block'};
        const buttonUnPauseStyle = {display: 'none'};

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Lottie options={defaultOptions}
                                height={200}
                                width={200}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused}/>
                        <button style={this.state.isStopped ? buttonUnPauseStyle : buttonPauseStyle}
                                onClick={() => this.setState({isPaused: !this.state.isPaused})}> {this.state.isPaused ? 'play' : 'pause'}
                        </button>
                        <button style={this.state.isStopped ? buttonStyle : buttonAltStyle}
                                onClick={() => this.setState({isStopped: !this.state.isStopped})}>{this.state.isStopped ? 'start' : 'stop'}
                        </button>

                    </div>
                </header>
            </div>
        );
    }
}

export default App;
