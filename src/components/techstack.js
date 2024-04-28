import "../style/techstack.css";
import html from "../Picture/html.svg";
import css from "../Picture/css-3.svg";
import js from "../Picture/javascript-1.svg";
import cpp from "../Picture/c.svg";
import py from "../Picture/python-5.svg";
import sql from "../Picture/mysql-logo.svg";
import reactpic from "../Picture/react.png";
import nodejs from "../Picture/nodejsDark.svg";
function techstack() {
  return (
    <div className="TechDiv">
      <h2>Tech Knowledge</h2>
      <div className="techimg">
        <img src={html}></img>
        <img src={css}></img>
        <img src={js}></img>
        <img src={reactpic}></img>
        <img src={nodejs}></img>
        <img src={cpp}></img>
        <img src={py}></img>
        <img src={sql}></img>
      </div>
    </div>
  );
}
export default techstack;
