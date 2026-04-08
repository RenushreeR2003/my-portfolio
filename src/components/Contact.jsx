import "./Contact.css"

function Contact() {
  return (

    <div id="contact">


      <div id="con">
        <h2>Get In Touch</h2>
        <h3>Let's discuss your project and create something amazing together</h3>
        
      <div id="sy">
        <div className="sy"><a href="mailto:renushreeramesh2003@gmail.com">
              <i class="fa-solid fa-envelope"></i>
              </a>
          </div>
          <div>
            <h3>Email <br />renushreeramesh2003@gmail.com</h3>
          </div>

          <div className="sy"><a href="https://maps.app.goo.gl/C7FeD9nKaewmTVAU6">
             <i class="fa-solid fa-location-dot"></i>
             </a>
          </div>
          <div>
            <h3>Location <br />Tumkur, India</h3>
          </div>
      </div>
      
    </div>
    </div>
  );
}

export default Contact;