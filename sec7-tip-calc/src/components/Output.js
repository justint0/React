export default function Output({ bill, tipPercentage }) {
  const tip = (bill * (tipPercentage / 100)).toFixed(2);

  return (
    <h2>
      You pay ${+bill + +tip} (${bill} + ${tip} tip)
    </h2>
  );
}
