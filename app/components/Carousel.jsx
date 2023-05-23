"use client";

import React, { useState } from "react";

const images = [
  "https://m.media-amazon.com/images/I/71jLBXtWJWL.jpg",
  "https://m.media-amazon.com/images/I/71eENfsvQEL._AC_UF1000,1000_QL80_.jpg",
  "https://m.media-amazon.com/images/I/91mYu67RfUL.jpg",
  "https://mpd-biblio-covers.imgix.net/9781596438279.jpg",
  "https://www.99booksstore.com/uploaded_files/product/192906257.webp",
];

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const goToNextImage = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  const goToPreviousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div
      className="h-lg w-lg m-10 rounded-lg relative"
      style={{ height: "500px", backgroundColor: "#EEEEEE" }}
    >
      <div className="flex flex-row">
        <div className="flex items-center justify-end">
          <button
            className="bg-gray-900 bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 transition-colors duration-300"
            onClick={goToPreviousImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 flex flex-row justify-center items-center">
          <img
            className="rounded-lg object-cover"
            src={images[currentImage]}
            alt="carousel"
            style={{
              width: "350px",
              height: "400px",
              margin: "30px",
              objectFit: "contain",
            }}
          />
          <div className="mt-20 ml-60">
            <h1 className="text-5xl font-[500] font-poppins">Animal Farm</h1>
            <p className="mt-2 font-[500] font-wix">by George Orwell</p>
          </div>
        </div>

        <div className="flex items-center justify-start">
          <button
            className="bg-gray-900 bg-opacity-25 hover:bg-opacity-50 rounded-full p-2 transition-colors duration-300"
            onClick={goToNextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
