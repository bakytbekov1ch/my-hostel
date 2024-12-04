import React from "react";
import Last from "../last/Last";
import Hero from "../hero/Hero";
import Main from "../main/Main";
import Inputs from "../inputs/Inputs";
import Number from "../number/Number";

import "./Home.scss";

const Home = ({ filteredData, handleDelete }) => {
  return (
    <div>
      <Number />
      <Inputs />
      <div className="home">
        <Last filteredData={filteredData} handleDelete={handleDelete} />
        <Hero filteredData={filteredData} />
        <Main filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Home;
