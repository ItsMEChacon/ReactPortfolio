import React from "react";
import { Link, useLocation } from "react-router-dom";
import './style.css'
import Mech from '../NavTabs/mech.jpg'

function NavTabs() {
  
    const location = useLocation();

    return (
        <div>
            {/* <Link to="/"><img id="logo" alt="AGLogo2" src={AGLogo2} style={{ top: "2px", left: "2px", width: "40px", height: "40px" }} /></Link> */}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <span className="tab"><img id="logo" alt="FN logo" src={Mech} style={{ width: "30px", height: "22px" }} /></span>
                    </Link>

                </li>
                <li className="nav-item">
                    <Link to="/home" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        <span className="tab">Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Portfolio"
                        className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
                    >
                        <span className="tab">Portfolio</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/contact"
                        className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                        <span className="tab">Contact</span>
                    </Link>
                </li>
            </ul>
        </div>

    );
}

export default NavTabs;