import "../style/project.css";
import gympic from "../Picture/Gym.png";
import github from "../Picture/github.svg";
import puzzle from "../Picture/puzzle.png";
import manager from "../Picture/Manager.png";
import todo from "../Picture/TodoProjectPic.png";
function Project() {
  return (
    <div id="project_id" className="project">
      <h1>Projects</h1>
      <div className="projectlist">
        <div className="eachproject">
          <img src={gympic} className="projectpic"></img>
          <div className="desc">
            <h2>Fitness Point</h2>
            <ul>
              <li>
                Experience a seamless online gym experience with our website,
                designed with simplicity and functionality in mind. Browse
                through various membership plans, explore our gym gallery, and
                easily get in touch with us. Joining the gym is just a click
                away, making fitness accessible and convenient for everyone.
              </li>
              <li>
                <a
                  href="https://github.com/rmstar458/GymWebsite"
                  target="_blank"
                >
                  <img src={github}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="eachproject">
          <img src={todo} className="projectpic"></img>
          <div className="desc">
            <h2>ToDo Web App</h2>
            <ul>
              <li>
                The TODO app is a full-stack application built with React.js,
                Node.js, and MongoDB. It allows users to create, read, update,
                and delete tasks. React handles the frontend interface, while
                Node.js serves as the backend API, interacting with MongoDB for
                data storage and retrieval.
              </li>
              <li>
                <a href="https://github.com/rmstar458/ToDo" target="_blank">
                  <img src={github}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="eachproject">
          <img src={puzzle} className="projectpic"></img>
          <div className="desc">
            <h2>Interactive Puzzle</h2>

            <ul>
              <li>
                Explore a theme-based web game that tests analytical, critical
                thinking, math, and soft skills. Navigate levels, answer
                questions, and overcome strategic dead-ends. With hints
                available, it's a challenging yet rewarding experience.
              </li>
              <li>
                <a
                  href="https://github.com/rmstar458/Puzzle-Game"
                  target="_blank"
                >
                  <img src={github}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="eachproject">
          <img src={manager} className="projectpic"></img>
          <div className="desc">
            <h2>Social Media Manager</h2>
            <ul>
              <li>
                Introducing a streamlined admin-user website designed for social
                media profile management. With separate user and admin pages,
                this platform facilitates efficient monitoring and evaluation of
                user social media profiles. Ideal for competitions or
                evaluations, it ensures easy access to user data for effective
                management.
              </li>
              <li>
                <a
                  href="https://github.com/rmstar458/Managing_Social_Media_Accounts"
                  target="_blank"
                >
                  <img src={github}></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
