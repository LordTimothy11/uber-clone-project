import React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Business from "../Business/Business"
import HeroThree from "../HeroThree/HeroThree";
import HeroFour from "../HeroFour/HeroFour";
import HeroLast from "../HeroLast/HeroLast";
import Footer from "../Footer/Footer";


function Home(){
    return(
        <div className="home">
            <Navbar />
            <Hero />
            <Business />
            <HeroThree />
            <HeroFour />
            <HeroLast />
            <Footer />
        </div>
    );
}

export default Home;