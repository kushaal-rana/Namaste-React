import {LOGO_URL} from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} alt="logo" className="logo w-5 h-7" />
        </div>  
        <div className="nav-items bg-zinc-900">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header