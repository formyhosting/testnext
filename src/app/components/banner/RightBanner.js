import React from "react";
import Image from "next/image";
import "./RightBanner.css"; // Import the CSS file

const RightBanner = () => {
  // Define width and height based on screen size
  const width = 400; // Adjust this value as needed
  const height = 300; // Adjust this value as needed


  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative RightBanner-main">
      <Image
        loading="lazy"
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10 right-banner-image"
        src="/images/bannerImg.png"
        alt="bannerImg"
        width={width}
        height={height}
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
