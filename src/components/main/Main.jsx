import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Main.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/my-hostel";


const Main = () => {
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
    <section className="main">
      <div className="container">
        <div className="main__content">
          <table>
            <tr>
              <th>№2</th>
              <th>Имя</th>
              <th>Номер</th>
              <th>Цена</th>
              <th>Дата</th>
              <th>Иконка</th>
            </tr>
            {value.map((item) => (
              <tr key={item.id} className="main__name">
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td
                  style={{
                    cursor: "pointer",
                    color: "blue",
                  }}
                >
                  <a href="tel: 0507111669">{item.phone}</a>
                </td>
                <td>{item.price}</td>
                <td>{item.createdAt}</td>
                <td className="main__icon">
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

export default Main;
