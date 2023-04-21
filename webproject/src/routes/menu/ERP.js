import React from "react";
import '../style.css';
import erp1 from './images/erp1.jpg';
import erp2 from './images/erp2.jpg';
import erp3 from './images/erp3.jpg';

const ERP = () => {
    return (
        <>
          <h2 class="head">ERP</h2>
          <img src={erp1} id="" class="bioimg" alt="ERPUser" />
          <h2>Enterprise resource planning (ERP)</h2>
          <p>ERP system, which stands for Enterprise-Resource Planning, is necessary for every modern company to take care of all aspect of a business. It’s a master of all ! But the main issue is that ERPs sometimes prove to be complex and expensive due to cost of the system, hardware and consulting fees. In such cases, web-based ERP solution costs you less bucks to implement and maintain.</p>
          <p>Enterprise Resource Planning (ERP) is business management software that integrates all the data on business processes and resources (product planning, manufacturing, purchasing, delivery, marketing, sales, finance, human resources etc.) and can be used by large, medium, and small businesses. In addition, nowadays each ERP system should be created according to the specific requirements and needs of the individual enterprise. As a rule, small and medium businesses acquire lightweight ERP applications that have a specific set of functions (features) to meet the needs of a certain business vertical. The creation of powerful custom ERP software that covers all the business processes and roles of a large enterprise requires a dedicated team of experienced developers and analytics.</p>
          <img src={erp2} id="" class="bodyimg" alt="ERPUser" />
          <p>Enterprise Resource Planning systems are software systems that prove to be of great help in operations planning, administration and to optimize internal business processes, comprising of manufacturing, supply chain, financials, customer relationship management, human resources as well as warehouse management. With the help of these solutions, a typical ERP software integrates the data and processes of an organization into a single unified system.</p>
          <h3>Advantages of custom ERP development</h3>
          <ul>
            <li>Improved quality and efficiency of business operations</li>
            <li>High protection of key and sensitive data due to multiple security systems and authorization</li>
            <li>Significant time savings due to fast data flows</li>
            <li>Fast and error-free decision-making due to business processes automation and optimization</li>
            <li>High data visibility and availability from anywhere and anytime</li>
            <li>All business data centralization and its collaboration.</li>
          </ul>
          <img src={erp3} id="" class="bodyimg" alt="ERPUser" />
          <h3>Our ERP development process</h3>
          <ul>
            <li><b>Preparation for implementation:</b> The first stage of our development process includes consulting, identification of project scope, number of modules needed etc. We start with understanding and deep analysis of your organization’s strategy and existing business processes and then offer you an ERP solution based on your specific needs and requirements.</li>
            <li><b>Configuration:</b> We continue with designing your ERP system. As a rule, we use two-tier development approach – we create ERP software that has two levels: corporate and subsidiary (department) levels. In this way, each department remains independent, concentrating on its core business operations, but at the same time all of them are integrated in one common system.</li>
            <li><b>Customization (optional):</b> We offer such configuration options that incorporate your business rules and practices to deliver the most suitable ERP feature set. By customizing your ERP software, you don’t lose your competitive advantage as opposed to the organizations that use standard ERP functionality.</li>
            <li><b>Extensions, Data Migration etc.</b></li>
            <li><b>User Training</b></li>
            <li><b>Support</b></li>
          </ul>
        </>
      
      );
  };
  
  export default ERP;