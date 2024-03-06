import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import Chart from "../components/Chart";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [bitcoinData, setBitcoinData] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,inr&include_24hr_change=true"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBitcoinData(data.bitcoin);
      } catch (error) {
        console.error("Error fetching data:");
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="my-5">
      <div className="flex items-center ml-8">
        <span className="text-xl text-gray-500 cursor-pointer">
          Cryptocurrencies
        </span>
        <MdKeyboardDoubleArrowRight className="text-2xl text-gray-500 mx-4" />
        <span className="text-xl font-semibold">Bitcoin</span>
      </div>

      <div className="flex gap-4 m-8 mt-4">
        {/* left */}
        <div className="bg-white p-4 w-2/3 border border-white rounded-lg">
          <div className="flex items-center">
            <FaBitcoin className="mr-2 text-3xl" style={{ color: "#F7931A" }} />
            <span className="mr-2 font-semibold text-2xl">Bitcoin</span>
            <span className="mr-2 font-semibold" style={{ color: "#768396" }}>
              BTC
            </span>
            <button
              className="bg-blue-600 text-white px-2 py-2 rounded-md ml-6"
              style={{ backgroundColor: "#768396" }}
            >
              Rank #1
            </button>
          </div>
          <div className="flex mt-8 items-center mb-2">
            <span className="text-2xl font-semibold">$ {bitcoinData.usd}</span>
            <div
              className={`flex items-center ml-6 border rounded-md font-semibold text-green-800 bg-green-100`}
            >
              <IoMdArrowDropup className="text-2xl" />
              <span className="ml-1 mr-2">{bitcoinData.usd_24h_change}%</span>
            </div>
            <span
              className="ml-3 text-sm font-semibold"
              style={{ color: "#768396" }}
            >
              (24H)
            </span>
          </div>
          <span className="font-medium">₹ {bitcoinData.inr}</span>
          <div className="border-b border-gray-300 my-4"></div>

          <div>
            <Chart />
          </div>

          
        </div>

        {/* right */}
        <div className="bg-blue-600 p-4 w-1/3 border rounded-lg">world </div>
      </div>
    </div>
  );
}
