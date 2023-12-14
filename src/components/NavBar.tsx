import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export default function NavBar() {
  const highlight = ({ isActive }: NavLinkProps) => {
    return {
      color: isActive ? "red" : "inherit",
    };
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <NavLink style={highlight} to="/">
        home
      </NavLink>
      <NavLink style={highlight} to="/brand">
        brand
      </NavLink>
      <NavLink style={highlight} to="/accord">
        향조(accord)
      </NavLink>
      <NavLink style={highlight} to="/fragrance">
        향료(fragrance)
      </NavLink>
      <NavLink style={highlight} to="/mypage">
        mypage
      </NavLink>
    </nav>
  );
}
