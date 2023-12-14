import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

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
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "inherit",
          };
        }}
        to="/accord"
      >
        향조(accord)
      </NavLink>
      <NavLink
        style={({ isActive }: NavLinkProps) => {
          return {
            color: isActive ? "red" : "inherit",
          };
        }}
        to="/fragrance"
      >
        향료(fragrance)
      </NavLink>
    </nav>
  );
}
