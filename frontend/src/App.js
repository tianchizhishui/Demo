import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState(""); // State to store input

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", "C", "=", "+"
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInput(""); // Clear input when "C" is pressed
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate the expression
      } catch {
        setInput("Error"); // Handle invalid expressions
      }
    } else {
      setInput((prev) => prev + value); // Append clicked value to input
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <input
          type="text"
          className="w-full p-2 mb-4 text-right text-xl border rounded"
          value={input}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              className="p-4 text-lg font-semibold bg-gray-200 rounded hover:bg-gray-300 active:bg-gray-400"
              onClick={() => handleClick(btn)} // Attach event handler
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
