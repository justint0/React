// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [value, setValue] = useState("10");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function getRate() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        const answer = data.rates[String(toCurrency)];
        setOutput(answer);
        setIsLoading(false);
      }
      if (fromCurrency === toCurrency) {
        return setOutput(value);
      }
      getRate();
    },
    [value, fromCurrency, toCurrency]
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isLoading ? true : false}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading ? true : false}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading ? true : false}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
