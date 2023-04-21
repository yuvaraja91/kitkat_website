import React from "react";
import './menu.css';
import medical1 from './images/medical1.jpg';
import medical2 from './images/medical2.jpg';
import medical3 from './images/medical3.jpg';

const MedicalBilling = () => {
    return (
        <>
          <h2>Medical Billing</h2>
          <img src={medical1} id="" class="bioimg" alt="ERPUser" />;
          <h2>Hospital Management software</h2>
          <p>Worry less about your practice and more about your patients.We have the simple and worry-free solution to your practice management, scheduling, and claim filing needs allowing you to concentrate on what’s really important without having to worry about complex systems. This one software is able not only to keep your practice running smooth, but also increase your offices income</p>
          <p>Today healthcare industry is growing rapidly due to which various public and private sector businesses are investing as well as participating in it at large scale. This significant growth enabled hospitals to use latest technologies like software in their health care centre to give better health care services to patients. As Enterprise Resource Planning is offering ultimate solutions to many sectors, hence healthcare industry is no exception.</p>
          <img src={medical2} id="" class="bodyimg" alt="ERPUser" />
          <p>Hospitals cannot continue to follow the same procedures and technologies in their industry. They need to be updated with the growing industry needs with regards to utilization of most advanced and cutting edge technologies for faster information transmission. Hospitals require more connectivity and fast information transfer because the data to be passed is urgent and will not serve the purpose if it does not reach on time. So to overcome this problem hospitals are now taking the help of software’s to centralise their management process with hospital software.</p>
          <p>We provide best in class Hospital management software solutions gives your entire hospital the edge over ordinary. Our software solutions help hospitals to put their plan on place. With the help of our software solutions hospital authorities can manage their hospital growth, optimise their processes and can also improve their patient’s satisfaction. Our Hospital software solutions are user friendly and are developed in such a way to suit all hospital needs from small clinics, laboratory centre to large multi-speciality hospital chains.</p>
          <h2>Advantages Of Hospital Management Software</h2>
          <p><b>Easy access to patient’s data :</b> In patient’s care, their medical data is really very important. As the Hospital software stores the data in an electronic format, so it’s easy for the doctors and management.</p>
          <p><b>Increased security :</b> The hospital management software stores the patient medical records and other important data in a secure database which can be only accessed by hospital authority and staff members.</p>
          <p><b>Improve efficiency :</b> After the successfully implementation of Hospital Management system, the hospital staff will never have to face the problems such as duplicate records, missing records, delays, billing errors etc.</p>
          <img src={medical3} id="" class="bodyimg" alt="ERPUser" />
        </>

    );
  };
  
  export default MedicalBilling;
  