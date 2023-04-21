import React from "react";
import './menu.css';
import Ecom from './images/ecommerce.jpg';
import Ecom1 from './images/ecom1.png';


const Ecommerce = () => {
    return(
      <>
          <h2>E-Commerce</h2>
          <img src={Ecom} id="" class="bioimg" alt="Ecom" />;
          <div class="divleft1">
          <h2>E-Commerce</h2>
          <p>E-commerce is the process of buying and selling merchandise via electronic means, such as the Internet, mobile applications, and other online platforms. It refers to both e-retail and electronic transactions. While most people think of e-commerce as business-to-consumer (B2C), there are a number of other types of e-commerce.</p>
          <p>Business to Consumer (B2C) – Business to consumer (B2C) is a transaction between a business and an end-user or consumer. This includes selling directly to consumers via catalogs, website sales, or selling directly in brick and mortar stores. It also includes purchasing products from a website that is not someone’s personal page or blog, but an actual store. Most people who think about eCommerce think primarily about B2C transactions because these are the ones that are publicized most often. However, this is only one type of eCommerce.
          </p>
          <p>Business to Business (B2B) – Businesses buy from other businesses all the time. Often they purchase supplies or services that they need in order to run their own business or sell their products or services. Purchasing computers for employees or office supplies, using a marketing agency, hiring a fulfillment service like Fulfillment by Amazon – are all examples of business to business transactions
          </p>

          </div>

          <div class="divright1">
          <img src={Ecom1} id="" class="erpimg2" alt="Ecom1" />
          
          <h3>Electronic Commerce Solutions Key Modules</h3>
          
          <p></p>
          <p class="divsub">Customer on-boarding</p>
          <p class="divsub">Funding and withdrawal</p>
          <p class="divsub">Payments and money transfers</p>
          <p class="divsub">Wallet management</p>
          <p class="divsub">Agency management</p>
          <p class="divsub">Merchant management</p>
          <p class="divsub">Fees and commission management</p>
          <p class="divsub">Transaction management</p>
          <p class="divsub">General Ledger (GL)</p>
          <p class="divsub">Reporting</p>
          <p class="divsub">Administration</p>
          <p class="divsub">Host integration layer</p>
          <p class="divsub">Security</p>
          
          </div>
          
      </>

    ); 
  };
  
  export default Ecommerce;
  