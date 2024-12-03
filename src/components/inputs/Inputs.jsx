import React, { useState } from "react";
import axios from "axios";

import "./Inputs.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/my-hostel";

const Inputs = () => {
  const [items, setItems] = useState({
    name: "",
    phone: "",
    price: "",
    number: "",
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setItems({ ...items, [name]: value });
  };

  const handleSelect = (event) => {
    setItems({ ...items, number: event.target.value });
  };

  const handleProduct = (event) => {
    event.preventDefault();

    if (!items.name || !items.phone || !items.price || !items.number) {
      alert("Бардык талааларды толтуруңуз!");
      return;
    }

    axios
      .post(API, items)
      .then((res) => {
        console.log(res);
        setItems({
          name: "",
          phone: "",
          price: "",
          number: "",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="input">
      <div className="container">
        <h1>Адам кошуу</h1>
        <div className="input__content">
          <select name="floor" value={items.number} onChange={handleSelect}>
            <option value="">Тандамай</option>
            <option value="0">№ 0</option>
            <option value="1">№ 1</option>
            <option value="2">№ 2</option>
          </select>

          <input
            type="text"
            onChange={handleInput}
            placeholder="Имя"
            name="name"
            value={items.name}
          />
          <input
            type="text"
            onChange={handleInput}
            placeholder="Телефон номер"
            name="phone"
            value={items.phone}
          />
          <input
            type="text"
            onChange={handleInput}
            placeholder="Цена"
            name="price"
            value={items.price}
          />
          <button onClick={handleProduct}>Кошуу</button>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
