import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/UseCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then(res => res.json())
        .then(data => {
          console.log("footCart", data);
          if (data.insertedId) {
            refetch();
            //refetch cart to update the number of items in the cart
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Item has been save",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Login first to order the food!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then(result => {
        if (result.isConfirmed) {
          // Swal.fire("Deleted!", "Your file has been deleted.", "success");
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
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
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
