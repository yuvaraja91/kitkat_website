import React from "react";
import './style.css';
import career1 from './images/career1.png';
import career2 from './images/career2.png';

const Career = () => {
    return (
        <>
          <h2>Career</h2>  
          <img src={career1} id="" class="bioimg" alt="ERPUser" />
          <p>If you are looking to work on challenging assignments in leading fortune 500 companies and looking to advance your professional career, you are at the right place.</p>
          <p>At Kitkat Software Technologies , employees are our major assets. We believe in an open and informal relationship between employees and management. We attract the best and the brightest consultants.In addition to our handsome salary compensation, we offer excellent benefits and reimbursement of training costs. We also have a very generous employee referral program.Kitkat Software Technologies is looking for individuals with outstanding skills in software and business development. We offer careers in technology and business disciplines. Our clients know us for our leadership, determination, professionalism and commitment to quality. If you are interested in employment opportunities with Panelcoder Technologies, please e-mail us. We will be more than happy to help you.</p>
          <img src={career2} id="" class="bioimg" alt="ERPUser" />
          <p>Coimbatore Location</p>
          <p><b>Currently Hiring For:</b></p>
          <ul>
            <li>Fresher's and 1+ Years Exp.</li>
            <li>JAVA Developer</li>
            <li>PHP Developer</li>
            <li>Angular JS</li>
            <li>Node JS</li>
          </ul>
          
        </>
    );
  };
  
  export default Career;
  