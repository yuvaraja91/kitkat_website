import React from "react";
import bio_hrm from './images/bio-hrm.jpg';
import hrm from './images/hrm.jpg';
import bio_metric from './images/bio_metric.jpg';
import './menu.css';


const Biometric = () => {
    return(
      <>
          <h2>Our Products</h2>;
          <img src={bio_hrm} id="" class="bioimg" alt="Bioimg" />;

          <h1>Biometric Based HRM (Human Resource Management)</h1>
          <p>Biometric technologies are used to analyze and measure characteristics such as voice patterns, hand measurements, and iris patterns. These characteristics are then compared against the stored characteristics of the individual trying to gain access to a building or network; this system allows for accurate identification of an individual's identity down to the tiniest detail. This type of technology allows for accurate identification of employees in order to prevent fraud and theft in the workplace.</p>
          <h2>Transparency</h2>
          <p>Biometric technology truly excels in bringing about workplace transparency. Employers now have the ability to know for sure what employees are doing, when they are doing it, and who else is involved. If a manager needs to take an inventory of his or her employees, a simple biometric scan can help him perform the task with ease. This prevents cases of attendance fraud and makes it easy for managers to manage their human resources responsibly.</p>
          <h2>Saves Time</h2>
          <p>Installing a biometric device in a business will help save costs and cater to the time and attendance needs of employers for years. This means business owners do not have to hire a person to manage time and attendance or worry about cases of fraud. A biometric device will make life easier for all involved in HR management and will save your business money.</p>
          <img src={hrm} id="" class="bodyimg" alt="Bioimg" />
          <h2>Enhance Puntuality</h2>
          <p>Biometric attendance devices ensure accurate attendance reports. So employers can no longer claim their employees are late for work without solid evidence. Employees will also not be able to report inaccurate hours to inflate their income. This helps to reduce costs for businesses and ensure that workers are compensated fairly for the hours they have worked.</p>
          <h2>Increased Efficiency for Employee Maintenance</h2>
          <p>When it comes to creating extra hours or overtime, human resource planning can easily run a report to see who is on time, working late, and putting in extra. This reduces the time in the planning process and allows them to schedule efficiently.</p>
          <h2>Makes Absence Management a Breeze</h2>
          <p>When integrated with your human resources software, biometric time and attendance clocks record absences as well as late arrivals. With this information, you can precisely adjust payroll, automatically. And when someone calls in sick, you can use the software to see who’s not scheduled and call in someone else without much interruption in workflow.</p>
          <img src={bio_metric} id="" class="bodyimg" alt="Bioimg" />


      </>
    ) 
  };
  
  export default Biometric;