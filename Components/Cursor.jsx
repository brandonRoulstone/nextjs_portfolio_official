"use client"
import { useState, useEffect } from 'react';

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const updateCursorPosition = (event) => {
    setCursorX(event.clientX);
    setCursorY(event.clientY);
  };

  useEffect(() => {
    // Add event listener for mouse movement
    document.addEventListener('mousemove', updateCursorPosition);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    // <div className="cursor">
    //   <div className="outer-cursor" style={{ top: cursorY, left: cursorX }}><div className="inner-cursor"></div></div>
    // </div>
    <svg
        className="fixed"
        width="28"
        height="40"
        viewBox="0 0 24 36"
        fill="none"
        stroke="white"
        xmlns="http://www.w3.org/2000/svg"
        style={{ top: cursorY, left: cursorX }}
    >
        <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill="black"
        />

    </svg>
  );
};

export default Cursor;