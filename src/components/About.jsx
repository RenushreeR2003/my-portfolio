import "./Edu.css"

function About() {
  return (
    <section id="about" className="section">
      <h1 id="ed">Education</h1>
      <div className="text">
        <div id="clg">
          <h1><i class="fa-solid fa-award"></i>&nbsp;&nbsp;B.Tech in Computer Science Engineering</h1>
          <h3>Sri Siddhartha Institute of Technology , Tumkur </h3>
          <h3>2021 - 2025 | CGPA: 7.68</h3>
        </div>
        <div id="pu">
          <h1><i class="fa-solid fa-award"></i>&nbsp;&nbsp;PU in PCMB</h1>
          <h3>Shubhoday PU College, Gubbi </h3>
          <h3>2019 - 2021 | Percentage: 89.16%</h3>
        </div>
        <div id="hg">
          <h1><i class="fa-solid fa-award"></i>&nbsp;&nbsp;High School</h1>
          <h3>Shubhoday Girls High School, Gubbi </h3>
          <h3>2018 - 2019 | Percentage: 89.76%</h3>
        </div>
      </div>
      
    </section>
  );
}

export default About;