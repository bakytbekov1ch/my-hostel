import React from "react";
import Home from "../components/home/Home";

const HomePage = ({ filteredData, handleDelete }) => {
  return (
    <div>
      <Home filteredData={filteredData} handleDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
