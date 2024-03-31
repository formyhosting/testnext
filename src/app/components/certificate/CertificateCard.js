// Import React and other necessary libraries
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const CertificateCard = ({ title, des, src, link }) => {
  // Define width and height based on screen size or your design requirements
  const width = 300; // Adjust this value as needed
  const height = 400; // Adjust this value as needed

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group certificatesliderhover-light">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <Image
          loading="lazy"
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
          width={width}
          height={height}
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
