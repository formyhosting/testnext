// Import React and other necessary libraries
"use client"; // Add this line to mark the component as a client component
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoData from "../../data/logoData";

const SecurityRecognition = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 0, // Set to 0 for continuous scroll
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to calculate the dynamic count
  const getDynamicCount = (num) => {
    if (num < 10) return '5+';
    if (num >= 10 && num < 100) return `${Math.floor(num / 5) * 5}+`;
    return `${Math.floor(num / 10) * 10}+`;
  };

  const recognizedCount = getDynamicCount(logoData.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section id="security-recognition" className="w-full py-20 bg-bodyColor border-b-[1px] border-b-black">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-titleFont font-bold text-lightText mb-2">
          Recognized By Over <span className="text-designColor">{recognizedCount} Leading Organizations</span>
        </h2>
        <p className="text-lg text-lightText">
          My dedicated efforts in cybersecurity have been recognized by numerous industry leaders worldwide. Here are some of the esteemed organizations that have acknowledged my contributions and expertise in enhancing their security posture.
        </p>
      </div>
      <Slider {...sliderSettings} ref={sliderRef} className="overflow-hidden">
        {logoData.map((logo, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={logo} alt={`Organization Logo ${index + 1}`} className="max-h-24 object-contain" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SecurityRecognition;
