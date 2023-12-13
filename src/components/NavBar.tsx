import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "inherit",
          };
        }}
        to="/"
      >
        home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "inherit",
          };
        }}
        to="/brand"
      >
        brand
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "inherit",
          };
        }}
        to="/mypage"
      >
        mypage
      </NavLink>
    </nav>
  );
}
