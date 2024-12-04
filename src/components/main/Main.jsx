import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Main.scss";

const Main = ({ filteredData }) => {
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
            {filteredData.map((item) => {
              const date = new Date(item.createdAt);
              const formatDate = date.toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              });

              return (
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
                  <td>{formatDate}</td>
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
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Main;
