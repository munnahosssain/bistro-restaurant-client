import React from "react";
import FoodCard from "../../../components/foodCard/foodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mx-auto container">
        {items.map(item => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
