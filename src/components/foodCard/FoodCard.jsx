import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card card-compact lg:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
        <p className="absolute right-3 rounded-md top-2 bg-slate-900 text-white px-4 py-2 font-bold">
          ${price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
