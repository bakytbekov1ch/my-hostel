import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Hero.scss";

const Hero = ({ filteredData }) => {
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
            {filteredData.map((item) => {
              const date = new Date(item.createdAt);
              const formatDate = date.toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });

              return (
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
                  <td>{formatDate}</td>
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
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Hero;
