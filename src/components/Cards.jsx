import React from "react";
// Import Swiper styles
import "swiper/css";
const Cards = () => {
  return (
    <div className="max-w-[1640px]  p-4 grid md:grid-cols-4 gap-4 ">
      <div className="relative rounded-xl">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Italian food</p>
          <button className="border border-black rounded-2xl px-4 py-1 bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?size=626&ext=jpg"
        />
      </div>

      <div className="relative rounded-xl">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Fast Food</p>
          <button className="border border-black rounded-2xl  bg-white text-black px-4 py-1 mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://img.freepik.com/free-photo/pizza-pepperoni-table_140725-5396.jpg?size=626&ext=jpg&uid=R33083431&ga=GA1.2.930402118.1661865761&semt=sph"
        />
      </div>

      <div className="relative rounded-xl">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Salads</p>
          <button className="border border-black rounded-2xl  bg-white text-black mx-2 px-4 py-1 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://img.freepik.com/free-photo/farfalle-pasta-durum-wheat-with-baked-meatballs-chicken-fillet-tomato-sauce-salad-bowl_2829-11169.jpg?size=626&ext=jpg&uid=R33083431&ga=GA1.2.930402118.1661865761&semt=sph"
        />
      </div>

      <div className="relative rounded-xl">
        <div className="w-full h-full absolute bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Burger Food</p>
          <button className="border border-black rounded-2xl  bg-white text-black mx-2 px-4 py-1 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://img.freepik.com/premium-photo/delicious-grilled-burgers_62847-14.jpg?size=626&ext=jpg&uid=R33083431&ga=GA1.2.930402118.1661865761&semt=sph"
        />
      </div>
    </div>
  );
};

export default Cards;
