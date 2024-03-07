import React from "react";
import Chart from "react-apexcharts";

export default function Tokenomics() {
  const chartConfig = {
    type: "donut",
    series: [80, 20],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      labels: ["CrowdSale Investors", "Foundations"],
      colors: ["#1e88e5", "#ff8f00"], // Blue and Yellow colors
      legend: {
        show: false,
        position: "right",
        verticalAlign: "middle", // Vertically center legend
        labels: {
          colors: "#9AA5B1",
          fontSize: "14px", // Adjust font size
        },
      },
      dataLabels: {
        enabled: false, // Hide percentage labels
      },
    },
  };

  return (
    <div>
      <p className="text-3xl font-semibold">Tokenomics</p>
      <p className="mt-4 font-bold">Initial Distribution</p>
      <div className="mt-4 w-full sm:w-2/3">
        <div className="flex items-center">
          <Chart
            options={chartConfig.options}
            series={chartConfig.series}
            type="donut"
          />
          <ul className="mt-4 ml-4 list-disc">
            <li style={{ color: "#1e88e5" }}>
              <span className="bullet-blue"></span>Crowdsale Investors: 80%
            </li>
            <li style={{ color: "#ff8f00" }}>
              <span className="bullet-yellow"></span>Foundation: 20%
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-2 text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        quos fugit ab unde quod suscipit maiores, modi quam quo tempore possimus
        odio nostrum. Ipsa ea impedit nihil quod eius sed provident officiis
        dolorem tempora, possimus, itaque illo optio. Eaque, neque! Temporibus
        aperiam, voluptatibus quae ea sapiente officia maxime quod modi
        obcaecati at incidunt soluta voluptas, repudiandae totam rem unde.
        Placeat.
      </p>
    </div>
  );
}
