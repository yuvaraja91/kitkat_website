import Navbar from './Navbar';
// ...
import { Link } from 'react-router-dom';
import logo from './image/logo.jpg'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          {/* Logo */}
          <img src={logo} id="" class="flogo" alt="Logo" />;
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
