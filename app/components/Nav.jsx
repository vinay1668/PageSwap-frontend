"use client"; // this is a client component 👈🏽

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

// Import the web3 library
const Web3 = require("web3");

function Nav() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("");

  const handleConnect = async () => {
    try {
      const provider = new Web3.providers.HttpProvider(
        `https://mainnet.infura.io/v3/${process.env.API_KEY}`
      );
      const web3 = new Web3(provider);
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        setAddress(accounts[0]);
        setConnected(true);
      } else {
        console.log("MetaMask is not installed.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ml-5 mt-3 flex flex-row">
      {/* name and logo */}

      <h2 className="text-2xl mx-2 p-4 font-[600] font-inter">PageSwap</h2>

      {/* Search box */}

      <div class="relative flex items-center ml-10">
        <input
          type="text"
          class="py-2 pl-8 pr-2 rounded-lg bg-white shadow focus:outline-none focus:shadow-outline w-96"
          placeholder="Search for books, NFT's or users"
          onClick={() => {
            console.log("hello");
          }}
        />
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.707 9.293a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.414 0l-2.828-2.828a1 1 0 1 1 1.414-1.414L6 10.586l2.293-2.293a1 1 0 0 1 1.414 0zM7 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"
          />
        </div>
      </div>

      {/* Explore, Buy and Sell */}

      <div class="flex flex-row justify-around items-center p-4">
        <h2 class="text-base font-semibold text-gray-500 mx-4 cursor-pointer">
          Explore
        </h2>
        <h2 class="text-base font-semibold text-gray-500 mx-4">Buy</h2>
        <h2 class="text-base font-semibold text-gray-500 mx-4">Sell</h2>
      </div>

      {/* connect wallet button */}
      <div class="p-4 ml-auto">
        {connected ? (
          <div className="flex flex-row">
            <div
              className="ml-5"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                backgroundColor: "#F7C8E0",
              }}
            ></div>
            <FontAwesomeIcon className="px-6 text-3xl" icon={faBagShopping} />
          </div>
        ) : (
          <button
            onClick={() => {
              handleConnect();
            }}
            class="ml-5 mx-5 bg-black text-white rounded-lg h-10 px-4 hover:bg-gray-800 focus:outline-none font-semibold"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default Nav;
