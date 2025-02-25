import React, { useState } from "react";
import "./App.css"; // Import the styles

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = async (operation) => {
    if (a === "" || b === "") {
      alert("Please enter both numbers!");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8080/${operation}?a=${a}&b=${b}`
      );
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching result:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter second number"
      />
      <br /><br />
      <button onClick={() => handleCalculation("add")}>Add</button>
      <button onClick={() => handleCalculation("subtract")}>Subtract</button>
      <button onClick={() => handleCalculation("multiply")}>Multiply</button>
      <button onClick={() => handleCalculation("divide")}>Divide</button>
      <h2>Result: {result !== null ? result : "No result yet"}</h2>
    </div>
  );
}

export default App;
