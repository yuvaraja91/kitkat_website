import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
