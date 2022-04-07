import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import '../../../assets/css/responsive.css';
import BackToTopButton from '../../elements/BackToTopButton';



const Theme = () => {
    return(
        <div>
            <BackToTopButton/>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Theme;