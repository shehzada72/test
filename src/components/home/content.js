import React, {useContext} from 'react';
import {MainContext} from "../../context/App";

const Content = () => {
    const context = useContext(MainContext);

    const handleChange = e => {
        const {name, value} = e.target;

        context.handleUpdateState({[name]: value});
    };

    return (
        <div>
            <h1>App Name: {context.appName}</h1>
            <h1>Server: {context.server}</h1>
            <input value={context.appName} name={'appName'} onChange={handleChange}/>
            <input value={context.server} name={'server'} onChange={handleChange}/>

        </div>
    );
};

export default Content;