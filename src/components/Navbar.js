import "../style/App.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navdiv">
          <div className="logo">
            <i className="gg-code"></i>
            <div className="portfolio">Portfolio</div>
            <i className="gg-code-slash"></i>
          </div>
          <ul className="navul">
            <li className="navli">
              <Link
                activeClass="active"
                to="homedivmain"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClass="active"
                to="table_main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Education
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClass="active"
                to="project_id"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="navli">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="toggle_btn">
            <i className="gg-format-justify"></i>
          </div>
        </div>
      </div>
      <div className="dropdown">
        <ul>
          <li>
            <Link
              activeClass="active"
              to="homedivmain"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="table_main"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="project_id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
