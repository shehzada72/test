import React from 'react';
import Header from "../components/home/header";
import Footer from "../components/home/footer";

const Layout = props => {
    return (
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
};

export default Layout;