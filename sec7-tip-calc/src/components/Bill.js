export default function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value || 0)}
      ></input>
    </div>
  );
}
