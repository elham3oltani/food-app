import React from "react";
const Banner = () => {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="max-h-[500px] relative">
        <div className="w-full h-full absolute text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The<span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span>Devliered
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://img.freepik.com/premium-photo/juicy-burger-with-cutlet-cheese-top-view-free-copy-space_187166-18078.jpg?w=2000"
        />
      </div>
    </div>
  );
};

export default Banner;
