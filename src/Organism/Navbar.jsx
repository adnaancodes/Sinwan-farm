import React from "react";

function Navbar() {
  return (
    <div className="relative flex items-center justify-between bg-white">
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] bg-[#4397A4] rounded-full"></div>
        <h1 className="text-[#486A6F] text-3xl font-semibold">Sinwan Farms</h1>
      </div>
      <div className="hidden md:flex space-x-10 text-gray-400">
        {" "}
        <a href="" className="hover:text-gray-500">
          <p>About</p>
        </a>
        <a href="" className="hover:text-gray-500">
          <p>Fruits</p>
        </a>
        <a href="" className="hover:text-gray-500">
          <p>Veggies</p>
        </a>
        <a href="" className="hover:text-gray-500">
          <p>Contact</p>
        </a>
      </div>
      <button className="hidden md:block bg-cyan-600 px-6 rounded-xl text-white font-semibold py-2 ">
        Need a Product?
      </button>
    </div>
  );
}

export default Navbar;
