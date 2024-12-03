import React from "react";
import Last from "../last/Last";
import Hero from "../hero/Hero";
import Main from "../main/Main";
import Inputs from "../inputs/Inputs";

import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <Inputs />
      <div className="home">
        <Last />
        <Hero />
        <Main />
      </div>
    </div>
  );
};

export default Home;
