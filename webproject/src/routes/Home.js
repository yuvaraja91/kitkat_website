import React from "react";
import './style.css';
// import front from './images/front.png';
import front1 from './images/front1.png';
import front2 from './images/front2.jpg';
import front3 from './images/front3.png';
import front4 from './images/front4.png';
import front5 from './images/front5.png';
import prog from './images/prog.jpg';
import prog2 from './images/prog2.jpg';

const Home = () => {
    return(

      <>
          {/* <h2 class="head">Home page content</h2>; */}

  <section>
    <div id="slider">
      <figure>
  <img src={front1} id="" class="front" alt="Logo" />
  <img src={front2} id="" class="front" alt="Logo" />
  <img src={front3} id="" class="front" alt="Logo" />
  <img src={front4} id="" class="front" alt="Logo" />
  <img src={front5} id="" class="front" alt="Logo" />
      </figure>
    </div>
</section>


<section class="section1">

  <div class="container reveal">
    <h2>Our Speciality</h2>
   <div class="text-container">
      <div class="text-box">
        <h3>Designing</h3>
        <p>
        Engage with our professionals to generate your innovative ideas with the latest technologies and obtain our support.
        </p>
      </div>
      <div class="text-box">
        <h3>Planning</h3>
        <p>
        Plan with our expertise with your needs and Engage with them on further development with every possibilities of development.Extend your requirements with opportunities.
        </p>
      </div>
      <div class="text-box">
        <h3>Devoloping</h3>
        <p>
        Our developers are experienced enough to give result what you expect.They Make your needs real and user-friendly through the most recent programming tools.
        </p>
      </div>
    </div>
  </div>
</section>

<section>
<img src={prog2} id="" class="prog2" alt="Prog" />;
  <div class="container reveal">
    <h2><b>Programming</b></h2>
    <div class="text-container">
      <div class="text-box">
        <h3>Technologies</h3>
        <p>
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste. */}
          <img src={prog} id="" class="prog" alt="Prog" />;
        </p>
      </div>
      {/* <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div>
      <div class="text-box">
        <h3>Section Text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          eius molestiae perferendis eos provident vitae iste.
        </p>
      </div> */}
    </div>
  </div>
</section>

<section>
  <div class="container reveal">
    <h2>What We Do!</h2>
    <div class="text-container">
      <div class="text-box">
        {/* <h3>Section Text</h3> */}
        <p class="home_text">
          Web Design and Development<br/>
          ERP
        </p>
      </div>
      <div class="text-box">
        {/* <h3>Section Text</h3> */}
        <p class="home_text">
          Digital Marketing<br/>
          CRM
        </p>
      </div>
      <div class="text-box">
        {/* <h3>Section Text</h3> */}
        <p class="home_text">
        Android and IOS Development<br/>
          HRM
        </p>
      </div>
    </div>
  </div>
</section>
      
      <reveal/>
      </>

    ); 

  };

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  export default Home;
  