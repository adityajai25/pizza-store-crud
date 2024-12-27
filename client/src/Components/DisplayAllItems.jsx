import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DisplayAllItems = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/pizzas").then((response) => {
      setPizzas(response.data);
    });
  }, []);

  return (
    <div>
      <h2>All Pizzas</h2>
      <ul className="list-group">
        {pizzas.map((pizza) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={pizza.id}
          >
            <div>
              <strong>{pizza.name}</strong>: {pizza.description} (₹{pizza.price}) {pizza.size}
              
            </div>
            <div>
              <Link
                to={`/update/${pizza.id}`}
                className="btn btn-primary btn-sm me-2"
              >
                Edit
              </Link>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default DisplayAllItems;
