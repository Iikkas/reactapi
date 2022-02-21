import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [items, setItems] = useState([]);

  const HandleSubmit = () => {
    const url =
      "https://api.spoonacular.com/recipes/random?number=1&apiKey=d313b57d3f864d65ba879e56e7ea7416";
    console.log(url);

    axios
      .get(url)
      .then((response) => {
        setItems(response.data.recipes);
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="content">
      <h1>Random recipe api by spoonacular</h1>
      {items.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.instructions}</h3>
        </div>
      ))}
      <button onClick={HandleSubmit}>Random recipe</button>
    </div>
  );
}
