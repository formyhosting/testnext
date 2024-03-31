// CircleCursor.js
"use client";
import { useEffect, useState } from "react";
import "./CircleCursor.css";

// Add the use client directive to mark this component as a client component


const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });

    const target = e.target;
    const isClickable =
      target.matches && target.matches(".clickable"); // Check if the target matches the ".clickable" class
    const isInputOrTextarea =
      target.tagName.toLowerCase() === "input" ||
      target.tagName.toLowerCase() === "textarea" ||
      target.tagName.toLowerCase() === "select";

    setHovered(isClickable && !isInputOrTextarea);

    // Add or remove a class to the body based on whether the cursor is over input, textarea, or select
    if (isInputOrTextarea) {
      document.body.classList.add("cursor-over-input");
    } else {
      document.body.classList.remove("cursor-over-input");
    }
  };

  const onMouseDown = () => {
    setClicking(true);
  };

  const onMouseUp = () => {
    setClicking(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? "hovered" : ""} ${
        clicking ? "clicking" : ""
      }`}
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    >
      {/* <div className="cursor-inner"></div> */}
      <div className="ripple"></div>
    </div>
  );
};

export default CustomCursor;
