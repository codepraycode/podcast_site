import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import NewsLetter from '../../components/Newsletter/newsletter';
import Contact from '../../components/Contact/contact'

const Layout = (props)=>{
    return (
        <>
        <Header/>
        {props.children}
        {/* NewsLetter Subscription */}
            <NewsLetter/>
            
            {/* Contact us */}
            <Contact/>
        <Footer/>
        </>
    )
}


export default Layout;