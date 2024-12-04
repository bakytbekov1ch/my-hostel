import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./Last.scss";

const Last = ({ filteredData, handleDelete }) => {
  return (
    <section className="last">
      <div className="container">
        <div className="last__content">
          {filteredData.length === 0 ? (
            <p>No results found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>№0</th>
                  <th>Имя</th>
                  <th>Номер</th>
                  <th>Цена</th>
                  <th>Дата</th>
                  <th>Иконка</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => {
                  const date = new Date(item.createdAt);
                  const formatDate = date.toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  });

                  return (
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
                      <td>{formatDate}</td>
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
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default Last;
