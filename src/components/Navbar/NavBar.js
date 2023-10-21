import React from "react";
import { Nav, NavLink, NavMenu }
    from "./Navbar.Styles";
 
const Navbar = () => {
    return (
        <>
              <Nav class="navbar">   
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
