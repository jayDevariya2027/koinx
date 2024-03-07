import React from "react";
import Slider from "react-slick";
import { CiCircleInfo } from "react-icons/ci";
import { HiOutlineNewspaper } from "react-icons/hi";
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sentiments() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display 2 slides initially
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">Sentiments</h2>
      <div className="flex gap-3 items-center mt-3">
        <h2 className="font-medium text-xl" style={{ color: "#44475B" }}>
          Key Events
        </h2>
        <div
          className="flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#ABB9BF" }}
        >
          <CiCircleInfo className="text-white font-bold" />
        </div>
      </div>
      <Slider {...settings} className="mt-3">
        <div className="flex">
          <div
            className="flex border border-white rounded-lg p-4 gap-2"
            style={{ background: "#E8F4FD" }}
          >
            <div className="flex items-center justify-center rounded-full bg-blue-500 p-2 h-10  mt-4">
              <HiOutlineNewspaper className="text-white text-2xl" />
            </div>
            <div>
              <p className="font-medium my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                illum?
              </p>
              <p className="mb-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae nostrum accusamus nihil itaque, temporibus saepe
                obcaecati excepturi repudiandae, voluptas ipsam rem aut tempora
                ullam enim nemo tempore facere maxime veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className="flex border border-white rounded-lg p-4 gap-2"
            style={{ background: "#E8F4FD" }}
          >
            <div className="flex items-center justify-center rounded-full bg-green-500 p-2 h-10  mt-4">
              <IoMdTrendingUp className="text-white text-2xl" />
            </div>
            <div>
              <p className="font-medium my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                illum?
              </p>
              <p className="mb-2 text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae nostrum accusamus nihil itaque, temporibus saepe
                obcaecati excepturi repudiandae, voluptas ipsam rem aut tempora
                ullam enim nemo tempore facere maxime veniam.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            className="flex border border-white rounded-lg p-4 gap-2"
            style={{ background: "#E8F4FD" }}
          >
            <div className="flex items-center justify-center rounded-full bg-red-500 p-2 h-10  mt-4">
              <MdOutlineExplore className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="font-medium my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
                illum?
              </h2>
              <h4 className="mb-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae nostrum accusamus nihil itaque, temporibus saepe
                obcaecati excepturi repudiandae, voluptas ipsam rem aut tempora
                ullam enim nemo tempore facere maxime veniam.
              </h4>
            </div>
          </div>
        </div>
      </Slider>
      <div className="flex gap-3 items-center mt-6">
        <h2 className="font-medium text-xl" style={{ color: "#44475B" }}>
          Analyst Estimates
        </h2>
        <div
          className="flex items-center justify-center rounded-full"
          style={{ backgroundColor: "#ABB9BF" }}
        >
          <CiCircleInfo className="text-white font-bold" />
        </div>
      </div>
      <div className="flex gap-10 mt-4 items-center">
        <div
          className="flex items-center justify-center rounded-full p-2 h-24 w-24 sm:w-24 sm:h-24"
          style={{ background: "#DCFCE7" }}
        >
          <h1 className="text-2xl font-bold" style={{ color: "#0FBA83" }}>
            76%
          </h1>
        </div>
        <div>
          <div className="flex text-gray-500 mb-2 font-medium items-center">
            <div className="mr-8">Buy</div>
            <div
              className="w-32 h-2 rounded-md sm:w-80"
              style={{ background: "#0FBA83" }}
            ></div>
            <div className="ml-2">76%</div>
          </div>
          <div className="flex text-gray-500 mb-2 font-medium items-center">
            <div className="mr-6">Hold</div>
            <div className="w-3 h-2 rounded-md bg-gray-300 sm:w-10"></div>
            <div className="ml-2">8%</div>
          </div>
          <div className="flex text-gray-500 mb-2 font-medium items-center">
            <div className="mr-8">Sell</div>
            <div
              className="w-6 h-2 rounded-md sm:w-20"
              style={{ background: "#F7324C" }}
            ></div>
            <div className="ml-2">16%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Custom Previous Arrow Component
function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ left: "-15px", background: "black" }}
    >
      {"<"}
    </div>
  );
}

// Custom Next Arrow Component
function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="slick-arrow slick-next rounded-full"
      onClick={onClick}
      style={{
        right: "15px",
        backgroundColor: "white",
        color: "#333",
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
}
