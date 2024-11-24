import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
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
            <button className="login-btn" onClick={() => {btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");}}> {btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header