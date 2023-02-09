import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h2>iStore</h2>
      <nav>
        <NavList>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#293845" : "white",
              })}
              to="products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#293845" : "white",
              })}
              to="myCart"
            >
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#293845" : "white",
              })}
              to="myOrder"
            >
              My Orders
            </NavLink>
          </li>
        </NavList>
      </nav>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  background-color: #2c88d9;
  width: 100%;
  padding: 25px 50px;
  display: flex;
  justify-content: space-between;
  color: white;
  nav {
    width: 30%;
  }
`;

const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-weight:700;
  }
`;
