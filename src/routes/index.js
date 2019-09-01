import React, {Component, createContext} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {appRoutes} from "./routes";
import {MainContext} from "../context/App";

class Index extends Component {
    state = {
        appName: 'React Training',
        server: 'Node JS'
    };

    handleUpdateState = (newState) => {
      this.setState({...newState})
    };

    render() {
        return (
            <MainContext.Provider value={{
                ...this.state,
                handleUpdateState: this.handleUpdateState
            }}>
                <BrowserRouter>
                    <Switch>
                        {appRoutes.map((route, index) => (
                            <Route key={index} {...route}/>
                        ))}
                    </Switch>
                </BrowserRouter>
            </MainContext.Provider>
        );
    }
}

export default Index;