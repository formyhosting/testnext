// Import React and other necessary libraries
"use client"; // Add this line to mark the component as a client component
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectData from "../../data/projectData";
import ProjectsCard from "./ProjectsCard";
import "./Projects.css";

const Projects = () => {
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <div className="Project-heading-Container w-full ">
          <div className="Project-heading" id="Project-heading-one">
            M
          </div>
          <div className="Project-heading" id="Project-heading-two">
            y
          </div>
          <div className="Project-heading" id="Project-heading-two"></div>
          <div className="Project-heading" id="Project-heading-two">
            P
          </div>
          <div className="Project-heading" id="Project-heading-four">
            r
          </div>
          <div className="Project-heading" id="Project-heading-three">
            o
          </div>
          <div className="Project-heading" id="Project-heading-two">
            j
          </div>
          <div className="Project-heading" id="Project-heading-two">
            e
          </div>
          <div className="Project-heading" id="Project-heading-four">
            c
          </div>
          <div className="Project-heading" id="Project-heading-two">
            t
          </div>
          <div className="Project-heading" id="Project-heading-four">
            s
          </div>
        </div>
      </div>
      <Slider {...sliderSettings} ref={sliderRef} className="relative">
        {projectData.map((project, index) => (
          <div key={index} className="project-card transition-transform transform scale-90 hover:scale-100">
            <ProjectsCard
              title={project.title}
              des={project.des}
              src={project.src}
              websiteLink={project.websiteLink}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
