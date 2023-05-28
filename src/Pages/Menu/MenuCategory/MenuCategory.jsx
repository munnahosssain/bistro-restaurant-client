import React from "react";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, image, subTitle }) => {
  return (
    <div>
      {title && <Cover image={image} title={title} subTitle={subTitle} />}
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(item => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title.toLowerCase()}`} className="btn my-4">
        Order Now
      </Link>
    </div>
  );
};

export default MenuCategory;
