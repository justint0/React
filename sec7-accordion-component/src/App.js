import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          num={index}
          title={el.title}
          key={el.title}
          selected={selected}
          setSelected={setSelected}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        num={23}
        title={"Thinking in React"}
        key={"Thinking in React"}
        selected={selected}
        setSelected={setSelected}
      >
        Salute!
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, children, selected, setSelected }) {
  const isOpen = num === selected;

  function handleClick() {
    if (isOpen) setSelected(null);
    else setSelected(num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
