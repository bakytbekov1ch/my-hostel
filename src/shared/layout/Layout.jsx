import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Layout.scss";

const Layout = ({  search, setSearch }) => {
  return (
    <div className="layout">
      <Header search={search} setSearch={setSearch} />
      <main className="main">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
