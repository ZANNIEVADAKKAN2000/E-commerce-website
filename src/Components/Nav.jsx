import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav class="navbar navigation position-fixed">
      <div class="container-fluid">
        <Link class="navbar-brand company" to="/">
          FASHIONZA
        </Link>
        <Link class="navbar-brand item" to="/women">
          Women's Wear
        </Link>
        <Link class="navbar-brand item" to="/men">
          Men's Wear
        </Link>
        <Link class="navbar-brand item" to="/jewelery">
          Jewelery
        </Link>
        <Link class="navbar-brand item" to="/electronics">
          Electronics
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
