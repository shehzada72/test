import React from 'react';
import {MainContext} from "../../context/App";

class Content extends React.Component {
    static contextType = MainContext;

    handleChange = e => {
        const {name, value} = e.target;

        this.context.handleUpdateState({[name]: value});
    };

    render() {
        const {context} = this;
        return (
            <div>
                <h1>App Name: {context.appName}</h1>
                <h1>Server: {context.server}</h1>
                <h1>Name: {context.name}</h1>
                <input value={context.appName} name={'appName'} onChange={this.handleChange}/>
                <input value={context.server} name={'server'} onChange={this.handleChange}/>

            </div>
        );
    }
}

export default Content;