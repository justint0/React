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

  function subtractStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function subtractCount() {
    setCount((c) => c - step);
  }

  function addCount() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div>
        <button onClick={subtractStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={addStep}>+</button>
      </div>

      <div>
        <button onClick={subtractCount}>-</button>
        <span>Count: {count}</span>
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
    </>
  );
}
