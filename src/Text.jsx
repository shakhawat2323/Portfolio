import React, { useState, useEffect } from "react";

const AnimatedCard = () => {
  const [borderColor, setBorderColor] = useState("border-blue-500");

  // Changing the border color on a timer
  useEffect(() => {
    const colors = [
      "border-blue-500",
      "border-green-500",
      "border-red-500",
      "border-yellow-500",
    ];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBorderColor(colors[index]);
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`w-64 h-64 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-xl transition-all duration-500 transform ${borderColor} shadow-lg`}
      >
        <div className="h-full flex justify-center items-center text-white font-bold text-xl">
          <p>Animated Card</p>
          <p>Animated Card</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
