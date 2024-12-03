import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Hero.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/my-hostel";

const Hero = () => {
  const [value, setValue] = useState([]);

  async function handleProduct() {
    try {
      const res = await axios.get(API);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <table>
            <tr>
              <th>№1</th>
              <th>Имя</th>
              <th>Номер</th>
              <th>Цена</th>
              <th>Дата</th>
              <th>Иконка</th>
            </tr>
            {value.map((item) => (
              <tr key={item.id} className="hero__name">
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td
                  style={{
                    cursor: "pointer",
                    color: "blue",
                  }}
                >
                  <a href="tel: ${item.phone}">{item.phone}</a>
                </td>
                <td>{item.price}</td>
                <td>{item.createdAt}</td>
                <td className="hero__icon">
                  <Link to="/apple">
                    <IoEyeSharp
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                  <RiDeleteBin6Line
                    style={{
                      cursor: "pointer",
                      color: "red",
                    }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Hero;
