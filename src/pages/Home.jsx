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
import Tokenomics from "../components/Tokenomics";
import Team from "../components/Team";

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

  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending?order=gecko_inc"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTrendingCoins(data.coins);
        console.log(data.coins); // Log the fetched coins data
      } catch (error) {
        console.error("Error fetching data:", error);
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

      <div className="flex flex-col md:flex-row gap-4 m-8 mt-4">
        {/* left */}
        <div className="w-full md:w-3/4">
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
              {bitcoinData.usd_24h_change > 0 ? (
                <div
                  className={`flex items-center ml-6 border rounded-md font-semibold text-green-800 bg-green-100`}
                >
                  <IoMdArrowDropup className="text-2xl" />
                  <span className="ml-1 mr-2">
                    {Number(
                      Math.round(
                        bitcoinData.usd_24h_change * 100 + Number.EPSILON
                      ) / 100
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    %
                  </span>
                </div>
              ) : (
                <div
                  className={`flex items-center ml-6 border rounded-md font-semibold text-red-800 bg-red-100`}
                >
                  <IoMdArrowDropup className="text-2xl" />
                  <span className="ml-1 mr-2">
                    {Number(
                      Math.round(
                        bitcoinData.usd_24h_change * 100 + Number.EPSILON
                      ) / 100
                    ).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    %
                  </span>
                </div>
              )}

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
          <div className="bg-white p-6 border border-white rounded-lg mt-6">
            <Tokenomics />
          </div>

          {/* team */}
          <div className="bg-white p-6 border border-white rounded-lg mt-6">
            <Team />
          </div>
        </div>

        {/* right */}
        <div className="md:w-1/4 md:max-w-sm ">
          <div className="bg-blue-600 border rounded-lg p-8">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white font-semibold text-lg mb-4 text-center">
                Get Started with KoinX for Free
              </h1>
              <p className="text-white text-sm mb-4 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quae ipsum accusantium quibusdam. Amet autem quae
                tenetur, voluptatum modi nihil
              </p>
              <img className="h-32 mb-4" src="/assets/image3.png" alt="Logo" />
              <button className="bg-white text-black px-4 py-2 rounded-md font-semibold">
                Get Started for Free
              </button>
            </div>
          </div>
          <div className="bg-white border rounded-lg mt-4 p-4">
            <p className="font-semibold text-2xl">Trending Coins (24h)</p>
            {trendingCoins.length > 0 && (
              <>
                {trendingCoins.slice(0, 3).map((coin, index) => (
                  <div key={index} className="mt-5">
                    <div className="flex items-center justify-between">
                      <div className="flex">
                        <FaBitcoin
                          className="mr-1 text-3xl"
                          style={{ color: "#F7931A" }}
                        />
                        <p>{coin.item.name}</p>
                      </div>
                      <div
                        className={`flex items-center ml-6 border rounded-md font-semibold text-green-800 bg-green-100`}
                      >
                        <IoMdArrowDropup className="text-2xl" />
                        <span className="ml-1 mr-2">
                          {Number(
                            Math.round(
                              coin.item.data.price_change_percentage_24h.usd *
                                100 +
                                Number.EPSILON
                            ) / 100
                          ).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                          %
                        </span>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
