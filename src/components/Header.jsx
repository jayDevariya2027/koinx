import React from "react";

export default function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center border">
      <div className="ml-4">
        <img className="h-10" src="../src/assets/logo.png" alt="Logo" />
      </div>

      {/* Show hamburger menu for small screens */}
      <div className="flex items-center mr-4 gap-4 md:hidden">
        <button className="text-black text-lg font-bold hover:text-gray-800 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Show menu items for medium and larger screens */}
      <div className="hidden md:flex items-center gap-7">
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
