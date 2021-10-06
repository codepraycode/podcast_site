import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';


const Layout = (props)=>{
    return (
        <>
        <Header/>
        {props.children}
        <Footer/>
        </>
    )
}


export default Layout;