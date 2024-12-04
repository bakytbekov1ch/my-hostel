import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./shared/layout/Layout";
import HomePage from "./pages/HomePage";
import Apple from "./components/apple/Apple";
import axios from "axios";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/my-hostel";

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`${API}/${id}`);
      setData((prev) => prev.filter((x) => x.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredData(
        data.filter((item) =>
          item.name?.toLowerCase().includes(search.trim().toLowerCase())
        )
      );
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search, data]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        <Route
          index
          element={
            <HomePage filteredData={filteredData} handleDelete={handleDelete} />
          }
        />
        <Route path="/apple/:id" element={<Apple />} />
      </Route>
    </Routes>
  );
};

export default App;
