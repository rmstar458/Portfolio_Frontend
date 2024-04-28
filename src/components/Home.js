import "../style/Home.css";
import pic from "../Picture/Coding_pic.jpeg";
import leetcode from "../Picture/leetcode.svg";
import github from "../Picture/github.svg";
import linkedin from "../Picture/linkedinlogo1.png";
import React, { useState, useEffect } from "react";

function Home() {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const name = "Ramesh Kumar";
    let ans = "";
    let i = 0;
    const intervalId = setInterval(() => {
      ans += name[i];
      setDisplayName(ans);
      i++;
      if (ans === name) {
        clearInterval(intervalId);
      }
    }, 150);

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="homedivmain">
      <div className="homediv">
        <h2 id="head">Hello My name is </h2>
        <span id="name">{displayName}</span>
        <h3>
          A Passionate Front-End Develop with <br></br>good problem solving and
          analytical skills.
        </h3>
        <div className="Links">
          <div className="eachprofile">
            <a href="https://github.com/rmstar458" target="_blank">
              <img src={github}></img>
            </a>
            <div className="profilename">Github</div>
          </div>
          <div className="eachprofile">
            <a href="https://leetcode.com/rmstar458/" target="_blank">
              <img src={leetcode}></img>
            </a>
            <div className="profilename">LeetCode</div>
          </div>
          <div className="eachprofile">
            <a
              href="https://www.linkedin.com/in/ramesh-sharma458"
              target="_blank"
            >
              <img src={linkedin}></img>
            </a>
            <div className="profilename">Linkedin</div>
          </div>
        </div>
        <div className="Resumeclass">
          <a
            id="Resume"
            href="https://drive.google.com/drive/folders/1swzsOAsAyLMxV0se06TuukWZT91sSfH_?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="picclass">
        <img id="profilepic" src={pic}></img>
      </div>
    </div>
  );
}

export default Home;
