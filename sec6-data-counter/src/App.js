import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // Derived state
  const date = new Date();
  date.setDate(date.getDate() + count);

  function subtractCount() {
    setCount((c) => c - step);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={subtractCount}>-</button>
        <input value={count} onChange={(e) => setCount(+e.target.value)} />
        <button onClick={addCount}>+</button>
      </div>

      <p>
        <span>{count === 0 ? `Today is ${date.toDateString()}` : null}</span>
        <span>
          {count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : null}
        </span>
        <span>
          {count < 0
            ? `${Math.abs(count)} days ago was ${date.toDateString()}`
            : null}
        </span>
      </p>

      {step !== 1 || count !== 0 ? (
        <button onClick={handleReset}>Reset</button>
      ) : null}
    </div>
  );
}
