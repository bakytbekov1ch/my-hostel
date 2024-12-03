import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Last.scss";

const API = "https://6631e14cc51e14d69562ac56.mockapi.io/my-hostel";

const Last = () => {
  const [value, setValue] = useState([]);

  async function handleProduct() {
    try {
      const res = await axios.get(API);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${API}/${id}`);
      setValue((prev) => prev.filter((x) => x.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleProduct();
  }, []);

  return (
    <section className="last">
      <div className="container">
        <div className="last__content">
          <table>
            <tr>
              <th>№0</th>
              <th>Имя</th>
              <th>Номер</th>
              <th>Цена</th>
              <th>Дата</th>
              <th>Иконка</th>
            </tr>
            {value.map((item) => (
              <tr key={item.id} className="last__name">
                <td>{item.number}</td>
                <td>{item.name}</td>
                <td
                  style={{
                    cursor: "pointer",
                    color: "blue",
                  }}
                >
                  <a href={`tel: ${item.phone}`}>{item.phone}</a>
                </td>
                <td>{item.price}</td>
                <td>{item.createdAt}</td>
                <td className="last__icon">
                  <Link to={`/apple/${item.id}`}>
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
                    onClick={() => handleDelete(item.id)}
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

export default Last;
