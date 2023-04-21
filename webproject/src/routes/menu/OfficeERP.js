import React from "react";
import './menu.css';
import Erp_user from './images/Erp_user.jpg';
import erp from './images/erp.png';

const OfficeERP = () => {
    return(
      <>
          <h2>Office ERP</h2>;
          <img src={Erp_user} id="" class="bioimg" alt="ERPUser" />
          <div class="divleft">
          <img src={erp} id="" class="erpimg1" alt="ERPUser" />
          </div>
          <div class="divright">
            <h2>Enterprise Resource Planning</h2>
            <p>1. ERP (enterprise resource planning) describes software that lets an enterprise manage user access to its network resources efficiently. ERP software generally lets a user sign on to different enterprise systems and applications using the same password.</p>
            <p>2. ERP (enterprise resource planning) also describes software that manages all of a company's assets and resources, including such basic applications as general ledger, accounts payable and receivable, as well as manufacturing, inventory, and human resources.</p>
            <p>An Enterprise resource planning (ERP) software or system development helps organizations better manage their resources. The most vital aim to be achieved through ERP software is to integrate back office business processes and facilitating the information flow within an organization to take data-driven decisions. So enterprise resources planning software / system collects data from various levels of an organization and organizes it for business activities across departments. With a dedicated enterprise resource planning software / system development, an organization can standardize and automate its processes to achieve high level of efficiency in its operations. The ERP system ensures that all employees in an organization are working with the same data and watching the same key-performance indicators.</p>
          </div>
      
      </>

    ) 
  };
  
  export default OfficeERP;
  