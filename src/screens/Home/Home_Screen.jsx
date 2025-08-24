import React from "react";

// importing screens
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Food from "./components/food";
import Meet_Expert from "./components/Meet_Expert";
import Choose from "./components/Choose";
import Why from "./components/Why";
import Review from "./components/Review";
// import DownloadApp from "./components/Download";
import Download from "./components/Download";

const Home_Screen = () => {
  return (
    <>
        {/* <p>This is vikas here</p> */}
        <Header></Header>
        <HeroSection></HeroSection>
        <Food></Food>
        <Meet_Expert></Meet_Expert>
        <Choose></Choose>
        <Why></Why>
        <Review></Review>
        {/* <DownloadApp></DownloadApp> */}
        <Download></Download>
        <Footer></Footer>

    </>
  );
};

export default Home_Screen;
