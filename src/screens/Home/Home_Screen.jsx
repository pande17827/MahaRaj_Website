import React from "react";

// importing screens
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";



const Home_Screen = () => {
  return (
    <>
        {/* <p>This is vikas here</p> */}
        <Header></Header>
        <HeroSection></HeroSection>
        <Footer></Footer>
    </>
  );
};

export default Home_Screen;
