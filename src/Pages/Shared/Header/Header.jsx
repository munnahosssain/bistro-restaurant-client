import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact US</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/ourMenu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order</Link>
      </li>
      <li>
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Link to="/cart">
              <FiShoppingCart size={24} />
            </Link>
            <span className="badge bg-none indicator-item">8</span>
          </div>
        </label>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar">
            <div className="w-8 rounded-full">
              <img src="" />
            </div>
          </label>
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-40 text-white bg-black lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <Link to="/" className="lg:p-2 font-bold lg:text-2xl normal-case">
          L O G O
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
    </div>
  );
};

export default Header;
