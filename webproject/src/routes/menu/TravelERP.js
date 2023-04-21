import React from "react";
import Erp_software from './images/Erp_software.jpg';
import travel_erp from './images/travel_erp.png';
import './menu.css';

const TravelERP = () => {
    return(
      <>
          <h2>Travel ERP</h2>
          <img src={Erp_software} id="" class="bioimg" alt="ERPUser" />;
          <h2>Travel Enterprise Resource Planning</h2>
          <p>To the public eye travel is a straightforward concept focused on destinations, activities, tickets and itineraries. For those who work in the travel industry it’s always been a complicated set of interrelationships between retailers, wholesalers and service providers – made, if anything, even more challenging by the global reach of the Internet.</p>
          <p>Now travelers need less hand-holding and more knowledge with higher service levels. This means business models are changing in every link of the travel service chain and the travel technologies that sufficed twenty – or even ten – years ago simply won’t do the job anymore</p>
          <p>An enterprise resource planning (ERP) system addresses the issues of a distributed architecture by providing a travel business with an integrated suite of applications for front office, mid-office and back office business processes. The ERP suite has the ability to eliminate silos of isolated data and business activities with a common data model and standardized processes across key functions for: accounting, payroll; HR; supply chain, CRM & procurement. As shown in this graphic, the suite of travel-specific applications is designed to work smoothly and interchangeably with each other.</p>
          <div class="divright2">
            <h2>Advantages Of Travel ERP Software</h2>
            <p><b>Easy Configuration:</b> Growth is typically associated with new business models driven by new and innovative products and services. Legacy ERP systems are generally good operational foundations, but difficult to change in support of new ways of doing business. New ERP software is designed from the ground up to deliver flexibility and adaptability, both of which lead to easy configuration in support of new business processes.</p>
            <p><b>Extensibility:</b> Unlike legacy ERP, recent systems are designed to have their capabilities easily extended through other technologies. There are two important use cases for this capability.</p>
            <p><b>Real-time Business Visibility:</b> Existing ERP typically features “vampire reports” – running business transactions during the day and only generating reports at night. This working cycle is not competitive in today’s travel technology. New systems are capable of real-time data updates, providing the capability to data mine and supply reports when needed – via highly intuitive reporting and analytic features. Without this ability to react quickly to market conditions and customer behaviors a travel business cannot be competitive.</p>
          </div>
          <div class="divleft">
          <img src={travel_erp} id="" class="erpimg3" alt="ERPUser" />;          
          </div>
      </>

    ); 
  };
  
  export default TravelERP;
  