import React, { useEffect, useState } from "react";
import { FaBitcoin } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Footer() {
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

  // Function to get 10 random indices
  const getRandomIndices = (min, max, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  // Get 10 random indices
  const randomIndices =
    trendingCoins.length > 0
      ? getRandomIndices(0, trendingCoins.length - 1, 10)
      : [];

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <footer className="bg-white p-4 border w-full">
      <h1 className="font-bold text-2xl mt-8 ml-4">You May Also Like</h1>
      <div className="mt-4 ml-4">
        {trendingCoins.length > 0 && (
          <Slider {...settings}>
            {randomIndices.map((index) => (
              <div key={index} className="px-2">
                <div className="bg-white p-6 border border-gray rounded-lg mb-4">
                  <div className="flex items-center">
                    <FaBitcoin
                      className="mr-2 text-3xl"
                      style={{ color: "#F7931A" }}
                    />
                    <span className="mr-2 font-medium">
                      {trendingCoins[index].item.name}
                    </span>
                    {trendingCoins[index].item.data.price_change_percentage_24h
                      .usd > 0 ? (
                      <div
                        className={`flex items-center border rounded-md font-semibold text-green-800 bg-green-100`}
                      >
                        <span className="ml-1 mr-2">
                          {trendingCoins[
                            index
                          ].item.data.price_change_percentage_24h.usd.toFixed(
                            2
                          )}
                          %
                        </span>
                      </div>
                    ) : (
                      <div
                        className={`flex items-center border rounded-md font-semibold text-red-800 bg-red-100`}
                      >
                        <span className="ml-1 mr-2">
                          {trendingCoins[
                            index
                          ].item.data.price_change_percentage_24h.usd.toFixed(
                            2
                          )}
                          %
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-lg font-semibold">
                    {trendingCoins[index].item.data.price}
                  </div>
                  <div className="mt-2">
                    <img
                      src={trendingCoins[index].item.data.sparkline}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <h1 className="font-bold text-2xl mt-8 ml-4">Trending Coins</h1>
      <div className="mt-4 ml-4">
        <Slider {...settings}>
          {trendingCoins.slice(0, 10).map((coin, index) => (
            <div key={index} className="px-2">
              <div className="bg-white p-6 border border-gray rounded-lg mb-4">
                <div className="flex items-center">
                  <FaBitcoin
                    className="mr-2 text-3xl"
                    style={{ color: "#F7931A" }}
                  />
                  <span className="mr-2 font-medium">{coin.item.name}</span>
                  {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                    <div
                      className={`flex items-center border rounded-md font-semibold text-green-800 bg-green-100`}
                    >
                      <span className="ml-1 mr-2">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  ) : (
                    <div
                      className={`flex items-center border rounded-md font-semibold text-red-800 bg-red-100`}
                    >
                      <span className="ml-1 mr-2">
                        {coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-2 text-lg font-semibold">
                  {coin.item.data.price}
                </div>
                <div className="mt-2">
                  <img src={coin.item.data.sparkline} alt="" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </footer>
  );
}
