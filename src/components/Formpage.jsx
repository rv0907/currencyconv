import React, { useState } from "react";
import useCurrencyInfo from "../customhook/Usedcurrencyinfo";

function Formpage() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [converted, setConverted] = useState(null);

  const rate = useCurrencyInfo(fromCurrency, toCurrency);

  const converter = () => {
    if (fromCurrency && toCurrency && amount && rate) {
      setConverted(amount * rate);
    } else {
      alert("Please fill in all fields correctly.");
    }
  };

  return (
    <div
      className='form container'
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", // fixed 'alignment'
        width: "50%",
        margin: "auto",
        padding: "20px",
      }}
    >
      <input
        type='text'
        placeholder='From Currency (e.g., USD)'
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
      />
      <input
        type='text'
        placeholder='To Currency (e.g., INR)'
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
      />
      <input
        type='number'
        placeholder='Amount'
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={converter}>Convert</button>

      {converted !== null && (
        <h3>
          {amount} {fromCurrency} = {converted.toFixed(2)} {toCurrency}
        </h3>
      )}
    </div>
  );
}

export default Formpage;
