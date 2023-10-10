import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <div class="image-header">
                 <h1>BaseStationFive</h1>
                <img src="https://basestationfive.files.wordpress.com/2017/06/cropped-footprint-moon.jpg" width="100%" alt="BaseStationFive" class="center"/>
            </div>
              <Nav>   
                <NavMenu>
                <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                    <NavLink to="https://basestationfive.wordpress.com" target="_blank" activeStyle>
                        WordPress
                    </NavLink>
                    <NavLink to="/explore" activeStyle>
                       Explore
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                       Login
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;
