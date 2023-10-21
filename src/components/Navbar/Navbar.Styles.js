
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
background-color: black;
width: 95%;
margin:auto;
`;
 
export const NavLink = styled(Link)`
padding-right: 15px;
padding-left: 5px;
color: white;
text-decoration: none; 
&:hover {
    color: grey;
    transition: 200ms ease-in;
    }
`;
 
export const NavMenu = styled.div`
background-color: black;
`;