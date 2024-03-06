import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div className="pl-6 my-5">
      <div className="flex items-center">
        <span className="text-xl text-gray-500 cursor-pointer">
          Cryptocurrencies
        </span>
        <MdKeyboardDoubleArrowRight className="text-2xl text-gray-500 mx-4" />
        <span className="text-xl font-semibold">Bitcoin</span>
      </div>

      <div></div>
    </div>
  );
}
