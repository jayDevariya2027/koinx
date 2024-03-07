import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaBitcoin } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import Chart from "../components/Chart";
import Performance from "../components/Performance";
import Sentiments from "../components/Sentiments";
import { useState } from "react";
import { useEffect } from "react";
import AboutBitcoin from "../components/AboutBitcoin";

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

  console.log(bitcoinData);
  return (
    <div className="my-5">
      <div className="flex items-center ml-8">
        <span className="text-xl text-gray-500 cursor-pointer">
          Cryptocurrencies
        </span>
        <MdKeyboardDoubleArrowRight className="text-2xl text-gray-500 mx-4" />
        <span className="text-xl font-semibold">Bitcoin</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 m-8 mt-4">
        {/* left */}
        <div className="w-full md:w-2/3">
          {/* bitcoin */}
          <div className="bg-white p-6 border border-white rounded-lg">
            <div className="flex items-center">
              <FaBitcoin
                className="mr-2 text-3xl"
                style={{ color: "#F7931A" }}
              />
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
              <span className="text-2xl font-semibold">
                $ {bitcoinData.usd}
              </span>
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

          <div className="mt-6 overflow-hidden">
            <ul className="flex gap-8 border-b border-gray-300 font-semibold">
              <li className="border-b border-blue-800 text-blue-800">
                Overview
              </li>
              <li>Fundamentals</li>
              <li>News Insights</li>
              <li>Sentiments</li>
              <li>Team</li>
              <li>Technicals</li>
              <li>Tokenomics</li>
            </ul>
          </div>

          {/* performance */}
          <div className="bg-white p-6 border border-white rounded-lg mt-6">
            <Performance
              priceOfBitcoin={bitcoinData.usd}
              todayHigh={bitcoinData.usd + 500}
              todayLow={bitcoinData.usd - 500}
              high52Week={bitcoinData.usd + 500}
              low52Week={bitcoinData.usd - 500}
            />
          </div>

          {/* sentiments */}
          <div className="bg-white p-6 border border-white rounded-lg mt-6">
            <Sentiments />
          </div>

          {/* about bitcoin */}
          <div className="bg-white p-6 border border-white rounded-lg mt-6">
            <AboutBitcoin />
          </div>

          {/* tokenomics */}
          <div className="bg-white p-6 border border-white rounded-lg mt-6"></div>

          {/* team */}
          <div className="bg-white p-6 border border-white rounded-lg mt-6"></div>
        </div>

        {/* right */}
        <div className="bg-blue-600 p-4 w-full md:w-1/3 md:max-w-sm border rounded-lg">
          world{" "}
        </div>
      </div>
    </div>
  );
}
