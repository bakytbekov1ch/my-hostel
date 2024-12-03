import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Apple.scss";
import axios from "axios";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/my-hostel";

const Apple = () => {
  const { id } = useParams();
  const [value, setValue] = useState({});

  async function handleProduct() {
    try {
      const res = await axios.get(API);
      const isproduct = res.data.find((x) => x.id === id);
      setValue(isproduct || {});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleProduct();
  }, [id]);

  return (
    <section className="apple">
      <div className="container">
        <div className="apple__content">
          <div className="apple__block">
            <span>№{value.number}</span>
            <span>{value.name}</span>
          </div>

          <div className="apple__phone">
            <a href={`tel: ${value.phone}`}>{value.phone}</a>
          </div>

          <div className="apple__btns">
            <h4>{value.createdAt}</h4>
            <span>{value.price}c</span>
          </div>

          <Link to="/">
            <button>Назад</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Apple;
