import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Education from "./components/education.js";
import Project from "./components/project.js";
import Contact from "./components/contact.js";
import TechStack from "./components/techstack.js";
import "./style/App.css";
import "./components/dropdown.js";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="second-class">
        <Home></Home>
        <TechStack></TechStack>
        <Education></Education>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
}
export default App;
