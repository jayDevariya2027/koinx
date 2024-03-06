import React from "react";

export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center border">
      <div className="ml-4">
        <img className="h-10" src="../src/assets/logo.png" alt="Logo" />
      </div>

      <div className="flex items-center mr-4 gap-4">
        <nav className="flex gap-7">
          <span className="text-black text-lg font-bold hover:text-gray-800 cursor-pointer">
            Crypto Taxes
          </span>
          <span className="text-black text-lg font-bold hover:text-gray-800 cursor-pointer">
            Free Tools
          </span>
          <span className="text-black text-lg font-bold hover:text-gray-800 cursor-pointer">
            Resource Center
          </span>
        </nav>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-4">
          Get Started
        </button>
      </div>
    </header>
  );
}
