import React from "react";
import './style.css';
import about1 from './images/about1.jpg';
import about2 from './images/about2.jpg';
import about3 from './images/about3.jpg';
import about4 from './images/about4.jpg';
import about5 from './images/about5.jpg';


const About = () => {
    return(
      <>
        <h2>About US</h2>
        <img src={about1} id="" class="bioimg" alt="ERPUser" />
        <p>KITKAT Software technologies is expertise in Web development, Application development, Mobile development, Creative design, Quality code awesome support Web development With sound domain knowledge we aim to deliver value to our customers through our innovative software solutions and services. It is highly essential factor for an business either online or offline is building an attractive and professional website which express the business offerings to the client in a smart way.</p>
        <h2>Who we are</h2>
        <h3>We Create, Design and Make it Real</h3>
        <p>Clients are made integral part of our team while executing the projects. This makes the audacious task of the software development and execution much simpler and easier, in tune with the client’s expectation. At I-Link, based on the situation and need of the project, we follow one of the following software development methodologies.</p>
        <p>Agile software development is a set of principles for software development in which requirements and solutions evolve through collaboration between self-organizing, cross-functional teams. It promotes adaptive planning, evolutionary development, early delivery, and continuous improvement, and it encourages rapid and flexible response to change. Agile itself has never defined any specific methods to achieve this, but many have grown up as a result and have been recognized as being 'Agile'.</p>
        <div class="aboutr">
          <h3>Our Skills</h3>
          <p class="abouttext">KITKAT is established primarily to carry out the offshore software development projects and registered as a 100% Software export unit. KITKAT has successfully delivered medium and large size projects on time and under budget using the Offshore Delivery Model with the help of Managerial and Technical skill sets. With an experience of over 5+ years now, KITKAT has adapted to various changes to understand the cross culture needs of the region specific customers.</p>
          <img src={about2} id="" class="aboutimg1" alt="ERPUser" />
          <h3>Our Mission</h3>
          <p>Our mission is to progressively realize our vision by providing innovative, proactive, efficient, cost-effective, quality solutions and services to our clients all over the world and by building a strong internal value system that provides the transparency and integrity in all the transactions among our employees, partners and customers.</p>
          <p>The methodology enforces strict adherence to adequate Documentation, Quality Control Processes and Client Communication.</p>
          <img src={about3} id="" class="aboutimg1" alt="ERPUser" />
        </div>
        <div class="aboutl">
        <img src={about4} id="" class="aboutimg1" alt="ERPUser" />
        <h3>Our Vision</h3>
        <p>To be a premier information technology solutions and services provider, by excelling in fulfilling the needs of its customers, partners and employees, by providing the most efficient and effective services and solutions, utilizing the best resources. We provide highly qualified and experienced Resources at a fraction of onsite prices. We meet any challenging schedule using our large pool of Offshore resources.</p>
        <img src={about5} id="" class="aboutimg1" alt="ERPUser" />
        <h3>Our offerings</h3>
        <p>We offer end-to-end solutions to the customers from Hardware to Software,Network to Live Remote-Support,Embedded Systems to Project Assistance. We work meticlously to provide best in class services.</p>
        </div>
      </>
    );
     
  };
  
  export default About;
  