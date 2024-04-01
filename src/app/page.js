"use client";
import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/ProjectsSilder/Projects";
import Features from "./components/features/Features";
import Resume from "./components/resume/Resume";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";
import UserInfo from "./components/userInfo/userInfo";
import FooterBottom from "./components/footer/FooterBottom";
import CircleCursor from "./components/CursorAnimation/CircleCursor/CircleCursor";
import AnimatedCircles from "./components/BackRound/AnimatedCircles/AnimatedCircles";
import ResumeButton from "./components/ResumeButton/ResumeButton";
import ChatBot from "./components/ChatBot/ChatBot";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  setTimeout(() => {
    setIsLoading(false);
  }, 3000); // Change the timeout value as needed

  return (
    <main className="w-full h-auto bg-bodyColor text-lightText px-4">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="max-w-screen-xl mx-auto">
          <AnimatedCircles />
          <Navbar />
          <ChatBot />
          <ResumeButton />
          <CircleCursor />
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Certificate />
          <Contact />
          <UserInfo />
          <FooterBottom />
        </div>
      )}
    </main>
  );
}
