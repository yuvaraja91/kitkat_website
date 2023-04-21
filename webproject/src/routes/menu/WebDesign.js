import React from "react";
import './menu.css';
import customized_web from './images/customized_web.jpg';
import webdev1 from './images/webdev1.jpg';
import webdev2 from './images/webdev2.jpg';

const WebDesign = () => {
    return (
        <>
          <h2>Customized Webdesign</h2>
          <img src={customized_web} id="" class="bioimg" alt="ERPUser" />
          <h2>Customized Web Development</h2>
          <p>Kitkat Software Technologies is a leading Professional web designing company in Coimbatore that has been successfully providing Web Design Services to our clients for over 8 years and employs the most experienced professionals. Kitkat Software Technologies creates professional websites by implementing the most powerful and cutting-edge technologies to enhance your online presence. We are happy to serve you if you need a Creative e-commerce website, Advanced professional website, Top custom designed website, or a Basic website.</p>
          <p>Custom website design solutions may be the best option for clients who want high-quality designs and a website that stands out from the crowd. Kitkat Software Technologies is a one-stop firm for custom web design. We will design the website based on your preferences. We have extensive experience and expertise in all aspects of web design, including website development, programming, mobile applications, Android applications, e-commerce websites, and much more. Not only that, but we have a team of creative and skilled designers who work with us to create stunning and fruitful websites for all of our projects. For our clients, they have created thousands of intensely enriching, creative websites. Web design in general has become one of the most in-demand services for most businesses looking to make an impact on their customers.</p>
          <img src={webdev1} id="" class="bodyimg" alt="ERPUser" />
          <p>Several applications are performing admirably, which is a testament to the incredible features of real-time web applications. It is expected to grow at a faster rate in the future. The vast majority of users have a wide range of requirements that must be met as soon as possible.</p>
          <img src={webdev2} id="" class="bodyimg" alt="ERPUser" />
        </>

    );
    
    
  };
  
  export default WebDesign;
  