import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import About from '../routes/About';
import WebDesign from '../routes/menu/WebDesign';
import SEO from '../routes/menu/SEO';
import Services from '../routes/Services';
import Layout from './Layout';
import Frontend from '../routes/menu/Frontend';
import PHP from '../routes/menu/PHP';
import Node from '../routes/Node';
import WebDev from '../routes/menu/WebDev';
import Products from '../routes/Products';
import Biometric from '../routes/menu/Biometric';
import OfficeERP from '../routes/menu/OfficeERP';
import Androidapp from '../routes/menu/Androidapp';
import Career from '../routes/Career';
import Contact from '../routes/Contact'
import Ecommerce from '../routes/menu/Ecommerce';
import MiniBanking from '../routes/menu/MiniBanking';
import TravelERP from '../routes/menu/TravelERP';
import POSBilling from '../routes/menu/POSBilling';
import Goldloan from '../routes/menu/Goldloan';
import MedicalBilling from '../routes/menu/MedicalBilling';
import IOSapp from '../routes/menu/IOSapp';
import CRM from '../routes/menu/CRM';
import ERP from '../routes/menu/ERP';
import HRM from '../routes/menu/HRM';
import Bulksms from '../routes/menu/Bulksms';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products/>}/>
          <Route path='biometric_hrm' element={<Biometric/>}/>
          <Route path='office_erp' element={<OfficeERP/>}/>
          <Route path='ecommerce' element={<Ecommerce/>}/>
          <Route path='minibanking' element={<MiniBanking/>}/>
          <Route path='travel_erp' element={<TravelERP/>}/>
          <Route path='pos_billing' element={<POSBilling/>}/>
          <Route path='goldloan' element={<Goldloan/>}/>
          <Route path='medical_billing' element={<MedicalBilling/>}/>
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="androidapp" element={<Androidapp/>}/>
          <Route path="iosapp" element={<IOSapp/>}/>
          <Route path="bulksms" element={<Bulksms/>}/>
          <Route path="crm" element={<CRM/>}/>
          <Route path="erp" element={<ERP/>}/>
          <Route path="hrm" element={<HRM/>}/>
          <Route path="career" element={<Career/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
