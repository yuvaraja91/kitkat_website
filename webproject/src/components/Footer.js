import React from "react";
import './style.css';
// import footerimg from './image/footer.png'
import footerimg from './image/footer.png';

const Footer = () => {
  return (
    <footer>
      {/* <p>footer area</p> */}
  <div class="foot">
  <img src={footerimg} id="" class="footerimg" alt="Footer" />;      
    <div class="foot1">
        <h2 class="footheader">Products</h2>
        <ul class="footerlist">
            <li>E-Commerce</li>
            <li>Office ERM</li>
            <li>Biometric Based HRM</li>
            <li>Mini Banking</li>
            <li>Gold Loan Management</li>
            <li>Medical Billing</li>
            <li>Travel ERP</li>
            <li>POS on Billing</li>

        </ul>
      </div>
      <div class="foot2">
        <h2 class="footheader1">Services</h2>
        <ul class="footerlist1">
            <li>Customized Web</li>
            <li>Website Design and Development</li>
            <li>Web Hosting</li>
            <li>Android Application Development</li>
            <li>IOS Application Development</li>
            <li>Bulk SMS</li>
            <li>HRM</li>
            <li>ERP</li>
            <li>CRM</li>
        </ul>
      </div>
      <div class="foot3">
        <h2 class="footheader3">Contact</h2>
        <ul class="footerlist2">
            <li>No.70/77, 1st floor, Krishna complex</li>
            <li>Kattor Road, Papanaickenpalayam,</li>
            <li>Coimbatore-641037</li>
            <li>Tamilnadu</li>
            <li>Phone: 0422 495 7272</li>
            <li>Mobile: 7010816299</li>
            <li>kitkatsoftwaretechnologies@gmail.com</li>
        </ul>
      </div>
      </div>
      <div class="copy">&copy All Right Reserved - Kitkat Software Technologies</div>
    </footer>
  );
  
};


export default Footer;
