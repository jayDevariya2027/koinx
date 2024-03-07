import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutBitcoin() {
  return (
    <div>
      <p className="text-3xl font-semibold">About Bitcoin</p>
      <p className="font-bold text-md mt-4">What is Bitcoin?</p>
      <p className="mt-2 text-justify">
        Bitcoin (BTC) is a cryptocurrency, a virtual currency designed to act as
        money and a form of payment outside the control of any one person,
        group, or entity, thus removing the need for third-party involvement in
        financial transactions. It is rewarded to blockchain miners for
        verifying transactions and can be purchased on several exchanges.
      </p>
      <div className="border-b border-gray-300 my-4"></div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        necessitatibus repellendus ducimus at ipsam ex officia distinctio
        voluptatem veniam provident quibusdam sapiente neque suscipit,
        temporibus qui optio expedita! Ipsum sunt doloribus ullam autem,
        voluptate aliquid. Id nulla eius modi quod.
      </p>
      <br />
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vero
        ipsa magni quibusdam, nisi eum fuga dolor praesentium quia voluptas,
        officia earum doloribus cumque facilis eligendi velit nesciunt quae
        mollitia perferendis. Culpa veritatis omnis cupiditate in nisi.
        Excepturi quae maiores dicta ea voluptatibus laudantium laborum, rem
        error mollitia architecto veritatis aliquid, officiis, in ipsum! Odit
        saepe vero tempora voluptatem est!
      </p>
      <br />
      <p className="text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        animi velit aliquam blanditiis inventore quam recusandae modi illo aut
        deserunt. Nostrum mollitia, reprehenderit velit sapiente sit nam quasi
        vero deserunt illum ad natus repudiandae alias id dolores corrupti sint
        quia.
      </p>
      <div className="border-b border-gray-300 my-4"></div>
      <p className="text-2xl font-semibold">Already Holding Bitcoin?</p>
      <div
        className="mt-4 flex flex-col md:flex-row gap-6"
        style={{ width: "95%" }}
      >
        <div
          className="p-3 flex border-white rounded-md"
          style={{ background: "#5FCDA6" }}
        >
          <img
            className="h-32 w-32 border-0 rounded-md"
            src="/assets/image1.jpg"
            alt="bitcoin"
          />
          <div className="ml-6 mt-2">
            <p className="font-semibold text-white text-xl">
              Calculate your Profits
            </p>
            <button className="bg-white px-4 py-2 rounded-md mt-4 font-semibold flex items-center gap-3">
              <p>Check Now</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div
          className="p-3 flex border-white rounded-md"
          style={{ background: "#FB825A" }}
        >
          <img
            className="h-32 w-32 border-0 rounded-md"
            src="/assets/image 2.jpg"
            alt="bitcoin"
          />
          <div className="ml-6 mt-2">
            <p className="font-semibold text-white text-xl">
              Calculate your tax liability
            </p>
            <button className="bg-white px-4 py-2 rounded-md mt-4 font-semibold flex items-center gap-3">
              <p>Check Now</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 my-4"></div>
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus
        tempora voluptatibus quibusdam cum molestias, nobis nesciunt dolores
        dignissimos maiores aspernatur saepe id esse perspiciatis, qui ipsa
        optio soluta dolor!
      </p>
    </div>
  );
}
