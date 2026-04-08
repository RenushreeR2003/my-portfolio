import "./Project.css"

function Projects() {
  return (
    <section id="projects" className="section">
      <div id="pj">
        <h2 id="p">Featured Projects <br /><h3>Showcasing my best work across different technologies and industries</h3></h2>
        <div id="proj">
          <div id="blog">
            <h1>Blog Application (Spring Boot + React)</h1>
            <p>Developed a full-stack blog application using ReactJS and Spring Boot, enabling users to create, view, and manage blog posts. Implemented RESTful APIs with JWT-based authentication for secure access and used MySQL with Spring Data JPA for efficient data handling. Integrated Cloudinary for image uploads and ensured smooth communication between frontend and backend.</p>
            <div id="tech">
              <h3 className="T">Java</h3>
              <h3 className="T">SpringBoot</h3>
              <h3 className="T">ReactJs</h3>
              <h3 className="T">HTML</h3>
              <h3 className="T">CSS</h3>
              <h3 className="T">JavaScript</h3>
              <h3 className="T">MySQL</h3>
            </div>
            <a href="https://github.com/RenushreeR2003/Blog-Application-Backend"id="btn">view project</a>
          </div>

          <div id="data">
            <h1>Data Structure Simulation</h1>
            <p>Developed an interactive web application to visualize data structures like arrays, stacks, and queues. 
              Implemented real-time operations such as insertion, deletion, and sorting.Improved user understanding through visual representation
</p>
              <div id="tech">
              
              <h3 className="T">HTML</h3>
              <h3 className="T">CSS</h3>
              <h3 className="T">JavaScript</h3>
              <h3 className="T">ReactJs</h3>
            </div>
            <a href=""id="btn">view project</a>
          </div>

          <div id="py">
            <h1>Intelligent Traffic Safety System</h1>
            <p>Developed an Intelligent Traffic Safety System using YOLOv3 for real-time object detection. Implemented computer vision techniques to detect vehicles and monitor traffic conditions, aiming to reduce accidents and improve road safety.</p>
            <div id="tech">
              <h3 className="T">Python</h3>
              <h3 className="T"> YOLOv3</h3>
              <h3 className="T">ReactJs</h3>
              <h3 className="T">HTML</h3>
              <h3 className="T">CSS</h3>
              <h3 className="T">JavaScript</h3>
            </div>
            <a href=""id="btn">view project</a>
          </div>
        </div>

      </div>


    </section>
  );
}

export default Projects;