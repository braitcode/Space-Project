import React from "react";
import '../css/Header.css'
import logo from "../space-tourism-website-main/starter-code/assets/shared/logo.svg"
import hamburger from "../space-tourism-website-main/starter-code/assets/shared/icon-hamburger.svg";
import { Link } from "react-router-dom";
import close from "../space-tourism-website-main/starter-code/assets/shared/icon-close.svg";
const Header = () => {
  // const handleClick = () => {
  //   console.log("close");
  // };

//   const activePage = window.location.pathname;
//   console.log(activePage)
  
  return (
    <>
      <div className="header">
        <div className="left-side">
          <img src={logo} />
        </div>
        <div className="border-header">
        </div>
        <div className="right-side">
          <ul>
            <div className="nav active">
              <Link to="/" style={{textDecoration: 'none'}}>
                <li>
                  <span>00</span> HOME
                </li>
              </Link>
            </div>
            <div className="nav"  >
                <Link to="/destination" style={{textDecoration: 'none'}}>
                <li>
                <span>01</span> DESTINATION
              </li>
                </Link>
            </div>
            <div className="nav" to="/crew">
                <Link to='/crew' style={{textDecoration: 'none'}}>
              <li>
                <span>02</span> CREW
              </li>
              </Link>
            </div>
            <div className="nav" to="/technology">
            <Link to='/technology' style={{textDecoration: 'none'}}>
              <li>
                <span>03</span> TECHNOLOGY
              </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="hamburger">
          <img src={hamburger}/>
        </div>
      </div>
    </>
  );
};

export default Header;