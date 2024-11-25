import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} alt="logo" className="logo w-5 h-7" />
        </div>  
        <div className="nav-items bg-zinc-900">
          <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="links">Cart</Link>
          </li>
            <button className="login-btn" onClick={() => {btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");}}> {btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header