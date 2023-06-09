import React, { useState, useEffect } from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular");

  return (
    <div className="lg:mx-24 my-24">
      <SectionTitle heading="From Our Menu" subHeading="Popular Menu" />
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map(item => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link
          to="/fullMenu"
          className="btn btn-outline btn-wide border-0 border-b-4 my-8"
        >
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default PopularMenu;
