import { useState } from "react";
import React from "react";
import Bill from "./Bill.js";
import SelectPercentage from "./SelectPercentage.js";
import Output from "./Output.js";
import Reset from "./Reset.js";

export default function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const tipPercentage = (myTip + friendTip) / 2;

  function handleReset() {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <Bill bill={bill} setBill={setBill} />
      <SelectPercentage tip={myTip} tipSetter={setMyTip}>
        <span>How did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage tip={friendTip} tipSetter={setFriendTip}>
        <span>How did your friend like the service?</span>
      </SelectPercentage>

      {(bill !== 0 || myTip !== 0 || friendTip !== 0) && (
        <React.Fragment>
          <Output bill={bill} tipPercentage={tipPercentage} />
          <Reset onReset={handleReset} />
        </React.Fragment>
      )}
    </div>
  );
}
