
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
  width: 90%;
  margin: auto;
  
`;
 
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  &.active {
    color: #4d4dff;
  }
`;
 
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  margin: auto;
`;