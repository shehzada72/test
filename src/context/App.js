import {createContext} from "react";

export const MainContext = createContext({
    appName: '',
    server: '',

    handleUpdateState: () => {}
});