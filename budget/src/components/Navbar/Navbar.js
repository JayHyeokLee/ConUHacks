import React from "react";
import { StyledNavbar, NavItemLink } from './style';

function Navbar({ children }) {
    return (
        <StyledNavbar>
            <NavItemLink to="/suggestions">Restaurants</NavItemLink>
            <NavItemLink>Gyms</NavItemLink>
            <NavItemLink>Bars</NavItemLink>
            <NavItemLink>Clubs</NavItemLink>
            <NavItemLink>Activities</NavItemLink>
            <NavItemLink to="/settings">Settings</NavItemLink>
            <NavItemLink to="/login">Log in</NavItemLink>
            <NavItemLink to="signup" fill>Sign up</NavItemLink>
        </StyledNavbar>
    );
}

export default Navbar;