import "./Skill.css"

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 id="sk">Skills, Certifications & More</h2>
      <h3 id="h3">Professional skills, certifications, and achievements</h3>
      <div id="skill">
        <div id="lag">
          <h2> <i class="fa-solid fa-laptop-code"></i>&nbsp;&nbsp;Languages
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>MySQL</li>
            </ul>
          </h2>
        </div>
        <div id="fra">
          <h2> <i class="fa-solid fa-bolt-lightning"></i>&nbsp;&nbsp;<u className="f">Frameworks</u> and Libraries</h2>
          <ul>
            <li className="te"><u id="s">SpringBoot</u></li>
            <li className="te" id="l">ReactJS</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div id="tools">
          <h2><i class="fa-solid fa-gear"></i>&nbsp;&nbsp;Tools & More</h2>
          <li>Git</li>
          <li>GitHub</li>
          <li>Visual Studio Code</li>
          <li>Postman</li>
        </div>
        <div id="cer">
          <h2><i class="fa-solid fa-award"></i>&nbsp;&nbsp;Certifications</h2>
          <ul>
            <li><a href="https://drive.google.com/file/d/1PEekoxfR2DkwLvJEqHnvALMGD4fUfKdA/view?usp=sharing">Soft Skills (NPTEL)</a> </li>
            <li><a href="https://drive.google.com/file/d/11AXT2y14JIOgfQvjRoFWiZuWPiEbtA8r/view?usp=sharing">Project Expo</a> </li>
            <li><a href="https://drive.google.com/file/d/1nZHWqfSk_v2xMCm5gK0Q4aCpTKXzQWKX/view?usp=sharing">Application Security</a></li>
            <li><a href="https://drive.google.com/file/d/1AUprrNcWnCHWM1ZKwrvRtB3-7-aayQVh/view?usp=sharing">Digital Image Processing</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;