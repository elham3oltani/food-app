import React, { useState, useContext } from "react";
import { data } from "./data/Data.js";
import { CartContext } from "../context/FoodContext";
import { TbTrashX } from "react-icons/tb";
import { quantityCount, IsInCart } from "../components/helper/functions";
import { Link } from "react-router-dom";
const Food = () => {
  let { state, dispatch } = useContext(CartContext);
  const [foods, setFood] = useState(data);
  console.log(state);
  const [items, setItems] = useState([]);
  const clickAf = () => {
    localStorage.setItems("items", JSON.stringify(items));
  };
  const filterType = (category) => {
    setFood(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFood(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-center text-4xl">
        Top Rated Menu Items
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="text-gray-700 font-bold mb-1">Filter Types</p>

          <div className="flex flex-wrap justify-between">
            <button
              onClick={() => setFood(data)}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              Salad
            </button>
          </div>
        </div>

        <div className="my-1">
          <p className="text-gray-700 font-bold mb-1">Filter Price</p>
          <div className="flex justify-between w-full maw-w-[390px]">
            <button
              onClick={() => filterPrice()}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border rounded-2xl px-5 py-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-4">
        {foods.map((item) => (
          <div key={item.id} className="shadow-lg">
            <Link to={`/home/${item.id}`} state={{ item }}>
              <img
                src={item.image}
                alt=""
                className="object-cover hover:scale-110 duration-300 rounded-t-lg w-full h-[200px]"
              />
            </Link>

            <div className="flex flex-col xl:flex-row sm:flex-row items-center lg:flex-row justify-between px-2 py-4">
              <p className="lg:font-bold my-2 text-center">
                {item.name}
                <span className="bg-orange-500 text-white p-0.5 lg:p-1 sm:text-md lg:text-base mx-0.5 rounded-full">
                  {item.price} $
                </span>
              </p>
              <div className="flex justify-center items-center my-3">
                {quantityCount(state, item.id) === 1 && (
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE-ITEM", payload: item })
                    }
                    className="border rounded-2xl px-2 mx-2 py-1 border-black"
                  >
                    <TbTrashX size={20} />
                  </button>
                )}

                {quantityCount(state, item.id) > 1 && (
                  <button
                    onClick={() => dispatch({ type: "DECRESS", payload: item })}
                    className="border rounded-2xl mx-2 px-3 border-black text-lg"
                  >
                    -
                  </button>
                )}
                {quantityCount(state, item.id) > 0 && (
                  <span className="font-bold">
                    {quantityCount(state, item.id)}
                  </span>
                )}
                {IsInCart(state, item.id) ? (
                  <button
                    onClick={() => dispatch({ type: "INCRESS", payload: item })}
                    className="border rounded-2xl px-3 border-black mx-2 text-lg"
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_ITEMS", payload: item })
                    }
                    className="border rounded-2xl px-3 py-0.5 border-black"
                  >
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
