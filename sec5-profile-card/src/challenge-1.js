import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div class="skill-list">
          <Skill skill="HTML" emoji="✏️" bg="red" />
          <Skill skill="CSS" emoji="🎨" bg="deepskyblue" />
          <Skill skill="JavaScript" emoji="👨🏻‍💻" bg="yellow" />
          <Skill skill="Python" emoji="🐍" bg="yellow" />
          <Skill skill="React" emoji="⚛️" bg="deepskyblue" />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="justin.jpeg" alt="Justin" />;
}

function Intro() {
  return (
    <div>
      <h1>Justin Tat</h1>
      <p>
        UConn computer science graduate with an interest in full-stack
        development and AI engineering. When I'm not coding, I like to play
        board games, watch movies, and spend time with friends.
      </p>
    </div>
  );
}

function Skill(props) {
  const style = {
    backgroundColor: props.bg,
  };

  return (
    <div style={style} class="skill">
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
