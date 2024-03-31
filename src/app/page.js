 // Import the cursor-effects package
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

export default function Home() {


  return (
    <main className="w-full h-auto bg-bodyColor text-lightText px-4">
      <AnimatedCircles />
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
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
    </main>
  );
}
