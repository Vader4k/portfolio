import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const moveCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${
          mousePosition.x - 16
        }px, ${mousePosition.y - 16}px)`;
      }
      requestAnimationFrame(moveCursor);
    };
    requestAnimationFrame(moveCursor);
  }, [mousePosition]);

  const variants = {
    default: {
      x: 0,
      y: 0,
    },
    text: {
      height: 150,
      width: 150,
      x: 0,
      y: 0,
      backgroundColor: "#EDE7E0", // Change the background color to black
      mixBlendMode: "difference",
    },
  };

  return (
    <div className="App">
      <motion.div
        className="w-[32px] h-[32px] rounded-full fixed bg-gray-400 top-0 left-0 right-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
        ref={cursorRef}
      />
    </div>
  );
}

export default CustomCursor;

