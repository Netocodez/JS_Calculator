import React, { useEffect, useState } from "react";
import "./App.css"; // import the styles

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClear = () => setDisplay("0");

  const handleDelete = () =>
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));

  const handleNumber = (digit) =>
    setDisplay((prev) => (prev === "0" ? digit : prev + digit));

  const handleOperator = (op) => setDisplay((prev) => prev + op);

  const handleEqualTo = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  const handleDecimal = () => {
    const parts = display.split(/[\+\-\*\/]/);
    const current = parts[parts.length - 1];
    if (current.includes(".")) return;
    setDisplay((prev) => prev + ".");
  };

  useEffect(() => {
    const handleKey = (e) => {
      const k = e.key;
      if (k >= 0 && k <= 9) handleNumber(k);
      if (["+", "-", "*", "/"].includes(k)) handleOperator(k);
      if (k === "Enter" || k === "=") handleEqualTo();
      if (k === "Escape") handleClear();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [display]);

  return (
    <div className="calc-wrapper">
      <div className="calculator">
        <div className="calculator-display">{display}</div>

        <div className="calculator-buttons">
          <button className="calc-btn clear" onClick={handleClear}>
            A/C
          </button>
          <button className="calc-btn delete" onClick={handleDelete}>
            Del
          </button>
          <button
            className="calc-btn operator"
            onClick={() => handleOperator("/")}
          >
            ÷
          </button>

          {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((n) => (
            <button
              key={n}
              className="calc-btn"
              onClick={() => handleNumber(n.toString())}
            >
              {n}
            </button>
          ))}

          <button
            className="calc-btn operator"
            onClick={() => handleOperator("*")}
          >
            ×
          </button>

          <button className="calc-btn" onClick={() => handleNumber("0")}>
            0
          </button>
          <button className="calc-btn" onClick={handleDecimal}>
            .
          </button>
          <button
            className="calc-btn operator"
            onClick={() => handleOperator("-")}
          >
            −
          </button>
          <button
            className="calc-btn operator"
            onClick={() => handleOperator("+")}
          >
            +
          </button>

          <button className="calc-btn equals" onClick={handleEqualTo}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
