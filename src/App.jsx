import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import HomePage from "./pages/HomePage";
import Apple from "./components/apple/Apple";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/apple/:id" element={<Apple />} />
      </Route>
    </Routes>
  );
};

export default App;
