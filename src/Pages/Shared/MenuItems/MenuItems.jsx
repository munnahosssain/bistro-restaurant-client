import React from "react";

const MenuItems = ({ item }) => {
  const { name, recipe, image, price } = item;

  return (
    <div className="flex space-x-4 items-center justify-center p-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-24"
        src={image}
        alt={name}
      />
      <div className="lg:px-12">
        <h3>{name}--------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItems;
