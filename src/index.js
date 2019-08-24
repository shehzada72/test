import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/home';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            institute: 'Fast Tech',
            campus: 'Model town',
        }
    }

    clickEvent = () => {
        console.log('clicked!!!!!');
    };


    valueChanged = event => {
        console.log(event.target.value);
        this.setState({
            institute: event.target.value
        });
    };

    render() {
        return <h1 onClick={this.clickEvent}>
            <div>Hello {this.state.institute}</div>
            <input value={this.state.institute} onChange={this.valueChanged}/>
        </h1>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
