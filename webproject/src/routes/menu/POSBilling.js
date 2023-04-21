import React from "react";
import './menu.css';
import pos_billing from './images/pos_billing.jpg';
import point_on_sale from './images/point_on_sale.png';
import billing_software from './images/billing_software.jpg';


const POSBilling = () => {
    return (
    <>
        <h2>POS Billing</h2>
        <img src={pos_billing} id="" class="bioimg" alt="ERPUser" />
        <h2>POS (Point On Sale) on Billing Software</h2>
        <p>A point of sale system is a combination of software and hardware that allows merchants to take transactions and simplify key day-to-day business operations</p>
        <p>Shoppers today look forward to a greater exit experience as much as the in-store experience. Unmatched billing speed aided with integration to all POS accessories.</p>
        <p>Operate your business on cloud without installing a Point of sale software, keep your business market ready, have critical business reports delivered to you 24x7 with web based POS.</p>
        <img src={point_on_sale} id="" class="bodyimg" alt="ERPUser" />
        <p>Now travelers need less hand-holding and more knowledge with higher service levels. This means business models are changing in every link of the travel service chain and the travel technologies that sufficed twenty – or even ten – years ago simply won’t do the job anymore.</p>
        <p>Just Billing Free Retail POS is a simple, yet comprehensive billing point of sale software that automates your business. This intuitive Retail POS app makes purchasing, inventory, payments, expenses and customer management easy, alongside billing and invoicing.</p>
        <img src={billing_software} id="" class="bodyimg" alt="ERPUser" />
        <h2>Need of POS Billing</h2>
        <div class="poslist">
        <ul class="listdesign">
         <li>Peak hour sales, festival season crowd needs no extra hands & efforts. Mobile app SellSmart, can help you bill on the move.</li>
          <li>Take payments with ease - cash, card, coupon, gift voucher, part-cash, part-card payment & more. Card swipe integration to bill faster.</li>
          <li>Design and print barcode labels. Print purchase price in barcode as alphanumeric. Issue quotation, proforma, follow-up & do more sales </li>
          <li>Exchange old for new, different prices for same item, customizable tax options i.e. TAX on MRP/Selling rate - predefine them or manage from bill screen also.</li>
          <li>Dayone- bill instantly from the day installation is complete. Billing will not stop even when main computer is down, uninterrupted 'Offline billing' provides peace of mind.</li>
          <li>Complete customer history in click of a button. Surprise customers with instant free offers, item discounts with shortcuts keys in the billing screen itself .</li>
        </ul>
        </div>
    </>
    );
  };
  
  export default POSBilling;
  