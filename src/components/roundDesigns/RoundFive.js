import React from "react";

const RoundFive = () => {
  return (
    <div className="w-80 h-80 md:w-96 md:h-96 rounded-full absolute bottom-0 -left-16 opacity-70 pointer-events-none">
      
      <div className="w-full h-full relative animate-spin-slow">
        
        {/* Green Glow */}
        <div className="w-28 h-28 rounded-full bg-green-400 absolute -bottom-10 left-16 blur-2xl opacity-70"></div>

        {/* Blue Glow */}
        <div className="w-32 h-32 rounded-full bg-blue-500 absolute top-24 -right-10 blur-3xl opacity-60"></div>

        {/* Purple Glow */}
        <div className="w-20 h-20 rounded-full bg-purple-500 absolute top-10 left-10 blur-2xl opacity-50"></div>

      </div>
    </div>
  );
};

export default RoundFive;