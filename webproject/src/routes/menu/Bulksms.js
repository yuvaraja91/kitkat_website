import React from "react";
import './menu.css';
import sms1 from './images/sms1.jpg';
import sms2 from './images/sms2.png';
import sms3 from './images/sms3.jpg';

const Bulksms = () => {
        return(
            <>
                <h2>Bulk SMS Service</h2>
                <img src={sms1} id="" class="bioimg" alt="ERPUser" />
                <h2>Bulk SMS Service</h2>
                <p>BULK SMS Marketing is one of the most effective, reliable and cost effective ways to market to your clients and businesses.This is the easiest way of promotion activities. this is used worldwide and has got a good response from the user.</p>
                <img src={sms2} id="" class="bodyimg" alt="ERPUser" />
                <h3>Promotional SMS Service</h3>
                <p>Promotional bulk sms is one of the cheapest marketing solutions that is available in the market. You can create awareness about your brand, product or any offer in a second with a single click. You can also send your clients new offers, new products or any events right away. Alot SMS offers you promotional SMS that can be used for Brand Promotion, Offers, product marketing, general awareness.</p>
                <h3>Transactional SMS services</h3>
                <p>Transactional SMS services are ideal for sending alerts/reminders/updates to your existing clients. It is easy to send bulk SMS throughout the globe with user-friendly web interface.Any kind of information sharing sms comes under transactional sms.Government has declared certain categorizes to send Transactional sms</p>
                <h3>Branding SMS</h3>
                <p>Branding bulk sms is one of the cheapest marketing solutions that is available in the market. You can create awareness about your brand, product or any offer in a second with a single click. You can also send your clients new offers, new products or any events right away. Alot SMS offers you promotional SMS that can be used for Brand Promotion.You can send Promotional sms with your brand name and thus ths will lead to create a better awareness of product in selected market.</p>
                <img src={sms3} id="" class="bodyimg" alt="ERPUser" />

            </>
        );


};

export default Bulksms;