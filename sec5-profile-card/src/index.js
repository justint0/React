import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML",
    level: "intermediate",
    color: "#ff0000",
  },
  {
    skill: "CSS",
    level: "intermediate",
    color: "#00BFFF",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#FFFF00",
  },
  {
    skill: "Python",
    level: "intermediate",
    color: "#FFFF00",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#00BFFF",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
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

function SkillList() {
  return (
    <div class="skill-list">
      {skills.map((skillItem) => (
        <Skill skillObj={skillItem} key={skillItem.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  const style = {
    backgroundColor: skillObj.color,
  };

  return (
    <div style={style} class="skill">
      <span>{skillObj.skill}</span>
      <span>{skillObj.level === "beginner" ? "👶" : null}</span>
      <span>{skillObj.level === "intermediate" ? "👍" : null}</span>
      <span>{skillObj.level === "advanced" ? "💪" : null}</span>
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
