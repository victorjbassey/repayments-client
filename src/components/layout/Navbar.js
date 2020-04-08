import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import logo from "../../assets/logo.svg";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="One Acre Fund Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </Header>
  );
};

export default Navbar;
