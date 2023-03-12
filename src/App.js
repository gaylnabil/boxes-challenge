import "./App.css";

import React, { useState } from "react";

import Box from "./components/Box";
import data from "./boxes_data.json";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
/**
 * We're using the useState hook to create a state variable called squares, which is set to the value
 * of the boxes array in our data.js file. We're then mapping over the squares array and creating a Box
 * component for each item in the array
 * @returns The return statement is returning the squareElements array.
 */

function App() {
  /* It's creating a state variable called squares, which is set to the value of the boxes array in our
data.js file. */
  const [squares, setSquares] = useState(data.boxes);

  /**
   * If the id of the box matches the id of the box that was clicked, then toggle the on property of that
   * box.
   * @param id - the id of the box that was clicked
   */
  const toggle = (id) => {
    setSquares((prevSquares) => {
      return prevSquares.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : box;
      });
    });
  };

  /* It's creating a state variable called squares, which is set to the value of the boxes array in our
data.js file. */
  const squareElements = squares.map((square) => (
    <Box
      key={square.id}
      id={square.id}
      on={square.on}
      handleToggle={(e) => toggle(square.id)}
    />
  ));

  return (
    <div className="App">
      <Navbar />
      {squareElements}
      <div>
        <Form />
      </div>

      {/* <Signup /> */}
    </div>
  );
}

export default App;
