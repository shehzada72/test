import React from 'react';

class ReactLifeCycle extends React.Component {
    state = {
        testing: '',
        color: 'red'
    };

    componentDidMount() {
        console.log('ComponentDidMount');
    }

    componentWillMount() {
        console.log('ComponentWillMount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.color === this.state.color)  {
            if (this.state.testing === 'blue') {
                this.setState({color: 'blue'});
            }
        }
    }


    componentWillUpdate(nextProps, nextState) {

    }

    handleChange = e => {
        let {value} = e.target;

        this.setState({testing: value});
    };

    render () {
        console.log('render');
        return (
            <div>
                <span style={{color: this.state.color}}>LifeCycle React </span> {this.state.testing}

                <input value={this.state.testing} onChange={this.handleChange}/>
                <button onClick={() => this.setState({testing: 'changed'})}>Update</button>
            </div>
        )
    }


}

export default ReactLifeCycle;