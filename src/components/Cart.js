import React, { useContext } from "react";
import { CartContext } from "../context/FoodContext";
import { CgClose } from "react-icons/cg";

const Cart = ({ data }) => {
  const { state, dispatch } = useContext(CartContext);
  const { image, name, category, quantity, price } = data;

  return (
    <div className="max-w-[1640px] flex items-center justify-between">
      <div className="flex justify-between items-center rounded-lg">
        <div className="mr-8">
          <img
            src={image}
            alt={data.name}
            className="object-cover rounded-full w-[150px] h-[150px] m-6"
          />
        </div>

        <div className="mr-12 w-[170px]">
          <p>{name}</p>
          <p>{category}</p>
        </div>
        <div className="border-b-2 border-gray-800"></div>

        <div className="mr-12 w-[170px]">
          {quantity > 1 ? (
            <button
              onClick={() => dispatch({ type: "DECRESS", payload: data })}
            >
              -
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "REMOVE-ITEM", payload: data })}
            >
              rem
            </button>
          )}
          <span>{quantity}</span>

          <button onClick={() => dispatch({ type: "INCRESS", payload: data })}>
            +
          </button>
        </div>
        <div className="w-[50px] mr-12">
          <p>{price}</p>
        </div>
        <div>
          <CgClose size={30} />
        </div>
      </div>
    </div>
  );
};

export default Cart;

{
  state.selectedItems.map((item) => (
    <div key={item.id} className="flex justify-between items-center">
      <img
        src={item.image}
        alt={item.name}
        className="object-cover rounded-full w-[150px] h-[150px] m-6"
      />
      <div className="m-6">
        <p>{item.name}</p>
        <p>{item.category}</p>
      </div>
      <div className="m-8">
        {item.quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECRESS", payload: item })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE-ITEM", payload: item })}
          >
            rem
          </button>
        )}
        <span>{item.quantity}</span>

        <button onClick={() => dispatch({ type: "INCRESS", payload: item })}>
          +
        </button>
      </div>
      <div className="">
        <p>{item.price}</p>
      </div>
      <div className="">
        <CgClose size={25} />
      </div>
    </div>
  ));
}
<div className="flex items-center justify-center bg-orange-500 rounded-lg h-[500px] w-[400px] fixed top-20 right-16 ml-8">
  <h1 className="px-12">Cart Details</h1>
  <button>Check Out</button>
</div>;

{
  state.checkOut && state.itemsCounter === 0 && (
    <div className="cursor-pointer">
      <h3>check out sussecc fully</h3>
    </div>
  );
}
