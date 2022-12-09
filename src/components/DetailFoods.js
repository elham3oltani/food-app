import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/FoodContext";
import { TbTrashX } from "react-icons/tb";
import { quantityCount, IsInCart } from "../components/helper/functions";
import StarRate from "./StarRate";
const DetailFoods = () => {
  var { state } = useLocation(); // <-- access route state
  const { item } = state || {}; // <-- unpack the item from state
  var { state, dispatch } = useContext(CartContext);
  const [rating, setRating] = useState(item.rate);

  return item ? (
    <>
      <Navbar />
      <div className="w-full h-[350px] bg-[url('https://img.freepik.com/free-vector/cooking-collection-background-fast-food_91128-1526.jpg?w=2000&t=st=1667823242~exp=1667823842~hmac=ec99cffbb9efc1d9d901474eff0eff1ba9418f2a1b4f6766574bf50c7c936f27')] bg-cover"></div>
      <div className="mx-auto lg:w-5/6 w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:my-[5.7rem] my-[3rem] mx-auto">
            <img
              src={item.image}
              className="lg:w-[600px] w-[300px] sm:w-[400px] rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <div className="lg:mx-10 mx-6">
              <p className="lg:text-[56px] text-[38px] font-thin border-b-2 border-orange-500">
                {item.name}
              </p>
            </div>

            <div className="lg:mx-10 mx-8 my-2">
              <p className="text-[24px]">{item.description}</p>
            </div>
            <div className="lg:mx-10 mx-8 my-1">
              <p className="text-[32px] font-thin">{item.price} $</p>
            </div>
            <div className="my-2 lg:mx-10 mx-8">
              <StarRate rating={rating} onRating={(rate) => setRating(rate)} />
            </div>
            <div className="flex my-6 items-center justify-between sm:justify-start lg:justify-start lg:mx-8 mx-4">
              {quantityCount(state, item.id) === 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE-ITEM", payload: item })
                  }
                  className="border-2 rounded-2xl lg:w-16 w-12 px-2 lg:mx-3 py-1 border-black"
                >
                  <TbTrashX size={20} className="mx-auto" />
                </button>
              )}

              {quantityCount(state, item.id) > 1 && (
                <button
                  onClick={() => dispatch({ type: "DECRESS", payload: item })}
                  className="border-2 lg:w-16 rounded-2xl w-12 lg:mx-3 px-3 border-black text-xl"
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
                  className="border-2 rounded-2xl lg:w-16 w-12 px-3 border-black lg:mx-3 text-xl"
                >
                  +
                </button>
              ) : (
                <button
                  onClick={() => dispatch({ type: "ADD_ITEMS", payload: item })}
                  className="border-2 w-36  rounded-3xl px-3 py-[6px] border-black hover:border-orange-500 transition duration-500  ease-in-out"
                >
                  Add to cart
                </button>
              )}
              <button
                className="border-2 lg:w-36 rounded-3xl sm:mx-10 lg:mx-10 px-3 py-[6px] border-black hover:border-orange-500 duration-500 ease-in-out"
                onClick={() => {
                  dispatch({ type: "ADD-FAVORITE", payload: item });
                }}
              >
                Add to Favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    "No item matched/found."
  );
};

export default DetailFoods;
