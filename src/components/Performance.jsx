import React from "react";
import { CiCircleInfo } from "react-icons/ci";

export default function Performance({
  priceOfBitcoin,
  todayLow,
  todayHigh,
  low52Week,
  high52Week,
}) {
  const sliderPosition =
    ((priceOfBitcoin - todayLow) / (todayHigh - todayLow)) * 100;

  const sliderPosition52Week =
    ((priceOfBitcoin - low52Week) / (high52Week - low52Week)) * 100;

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Performance</h2>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start mr-4">
          <div>Today's Low</div>
          <div>{todayLow}</div>
        </div>
        <div className="relative w-1/2">
          <input
            type="range"
            className="slider absolute w-full bg-gray-400 h-1 rounded-full outline-none opacity-50"
          />
          <div
            className="slider-thumb absolute -mt-3 w-6 h-6 bg-blue-600 rounded-full text-white flex items-center justify-center text-xs"
            style={{ left: `${sliderPosition}%` }}
          >
            ▲
          </div>
          <div className="absolute mt-6 left-0 right-0 text-center text-gray-600">
            {priceOfBitcoin}
          </div>
        </div>
        <div className="flex flex-col items-end ml-4">
          <div className="text-right">Today's High</div>
          <div>{todayHigh}</div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex flex-col items-start mr-4">
          <div>52W Low</div>
          <div>{low52Week}</div>
        </div>
        <div className="relative w-1/2">
          <input
            type="range"
            className="slider absolute w-full bg-gray-400 h-1 rounded-full outline-none opacity-50"
          />
          <div
            className="slider-thumb absolute -mt-3 w-6 h-6 bg-blue-600 rounded-full text-white flex items-center justify-center text-xs"
            style={{ left: `${sliderPosition52Week}%` }}
          ></div>
        </div>
        <div className="flex flex-col items-end ml-4">
          <div className="text-right">52W High</div>
          <div>{high52Week}</div>
        </div>
      </div>
      <div className="flex gap-3 items-center mt-8">
        <h2 className="font-medium text-xl" style={{ color: "#44475B" }}>
          Fundamentals
        </h2>
        <div
          className="flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#ABB9BF" }}
        >
          <CiCircleInfo className="text-white font-bold" />
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">
              Bitcoin Price
            </span>
            <span className="font-medium text-gray-700 my-2">$16815.46</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium ">
              24h Low / 24h High
            </span>
            <span className="font-medium text-gray-700 my-2 text-end">
              $16382.07 / $16874.12
            </span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium mr-1">
              7w Low / 7w High
            </span>
            <span className="font-medium text-gray-700 my-2 text-end">
              $16382.07 / $16874.12
            </span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">
              Trading Value
            </span>
            <span className="font-medium text-gray-700 my-2">
              $23,249,202,782
            </span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">
              Market Cap Rank
            </span>
            <span className="font-medium text-gray-700 my-2">#1</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
        </div>
        <div className="md:w-1/2 md:pl-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">Market Cap</span>
            <span className="font-medium text-gray-700 my-2">
              $323,507,290,047
            </span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">
              Market Cap Dominance
            </span>
            <span className="font-medium text-gray-700 my-2">38.343%</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">
              Volume / Market Cap
            </span>
            <span className="font-medium text-gray-700 my-2">0.0718</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">
              All-Time High
            </span>
            <span className="font-medium text-gray-700 my-2">$69,044.77</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 my-2 font-medium">All-Time Low</span>
            <span className="font-medium text-gray-700 my-2">$67.81</span>
          </div>
          <div className="border-b border-gray-300 my-2"></div>
        </div>
      </div>
    </div>
  );
}
