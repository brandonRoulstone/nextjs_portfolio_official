"use client";
import { motion, useDragControls } from "framer-motion";
import { useState } from "react";

const DashboardView = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dragControls = useDragControls();

  const handleDragEnd = (event, info) => {
    // This method runs when the dragging stops
    setX(info.point.x);
    setY(info.point.y);
    console.log("Ended");
  };

  return (
    <div className="min-h-screen min-w-[100%] flex justify-center items-center">
      <div className="h-screen w-[20%] bg-zinc-200"></div>
      <div className="h-screen w-[60%] bg-zinc-50 flex justify-center items-center">


        {/* find a possible way to dupllicate these components and using different shapes */}
        {/* On every click the component should not duplicate */}
        <motion.div
          drag
          dragControls={dragControls}
          dragMomentum={false}
          whileDrag={{
            scale: 1.2,
            cursor: 'grab'
          }}
          onDragEnd={handleDragEnd}
          style={{
            x: x,
            y: y,
            zIndex: 1200,
            position: "absolute",
          }}
          className="h-[2rem] w-[10rem] bg-zinc-100 shadow-lg flex justify-center items-center text-center"
        >
          Drag me!
        </motion.div>

      </div>
      <div className="h-screen w-[20%] bg-zinc-200"></div>
    </div>
  );
};

export default DashboardView;
