import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col lg:my-24">
        {/*  Page content here  */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-[#D1A054]">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-200 text-base-content">
          {/*  Sidebar content here */}
          <li>
            <NavLink to="/dashboard/Home">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaUsers />
              My Cart
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FiMenu />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaUsers />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
