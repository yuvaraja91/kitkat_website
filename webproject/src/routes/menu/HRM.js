import React from "react";
import '../style.css';
import hrm1 from './images/hrm1.jpg';
import hrm2 from './images/hrm2.jpg';
import hrm3 from './images/hrm3.jpg';
import hrm4 from './images/hrm4.png';


const HRM = () => {
    return (
      <>
          <h2 class="head">HRM</h2>
          <img src={hrm1} id="" class="bioimg" alt="ERPUser" />
          <h2>Human Resource Management (HRM)</h2>
          <p>HRM offers you wide solutions for HR department making it possible for other department to access specific employee data. The HR modules covers all the function required in business practice and is flexible enough to optimize the business processes by configuring to suit customer's requirement. Human Resource module streamlines the management of human resources and human capitals. HRM routinely maintains a complete employee database including contact information, salary details, Leaves, performance evaluation and promotion of all employees, Job History, Personal Details. Human resource Management is a suite of integrated solution, designed to facilitate HR operations by reducing time-intensive administrative tasks and lowering costs.</p>
          <img src={hrm2} id="" class="bodyimg" alt="ERPUser" />
          <h3>Employee Data Management</h3>
          <p>Employee Data Management helps you to have complete control and visibility of the employee life cycle. From the moment employees start with you through to retirement, you will have access to a system that helps you to make important decisions, and to consider the best possible career paths for your employees with the help of facilities like Job History Review. We can add the facility of saving as many details of the employee as company requires.</p>
          <img src={hrm3} id="" class="bodyimg" alt="ERPUser" />
          <h3>Time Sheet</h3>
          <p>Online timesheet management is beneficial to employees and project managers can use the timesheets to track time spent on each task in a project and administrative Work. Timesheet Review allows managers to assess the percentage completion of various tasks in a project and also gauge the input of each employee in the task</p>
          <h3>Leave Management</h3>
          <p>Leave management Module automates tracking and manages all your employee Leave information from one central location. Online Leave Application form facilitates online application, approval, and rejection process with Remarks provision. The leave patterns analysis report helps HR to constantly evolve its leave policy aligning to employee and business needs.</p>
          <img src={hrm4} id="" class="bodyimg" alt="ERPUser" />
          <h3>Trainig Management</h3>
          <p>A Training Management Module organizes training curriculums, schedules, training delivery, grading, and records and training history. helps training organizations streamline and optimize the back-office training processes for Instructor-Led-Training. Training Management helps in gradual growth in Employees’ weaknesses in professional life which enhance organisation’s overall performance.</p>


      </>
    );
  };
  
  export default HRM;