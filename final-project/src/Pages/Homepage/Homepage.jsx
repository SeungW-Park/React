import React from "react";
import Banner from "./components/Banner/Banner";
import { ParallaxProvider } from "react-scroll-parallax";

// 1.　배너 => popular movie를 배너에 보여주기
// 2. popular movie
// 3. top rated movie
// 4. popular movie

const Homepage = () => {
  return (
    <div>
      <ParallaxProvider>
        <Banner />
      </ParallaxProvider>
    </div>
  );
};

export default Homepage;
