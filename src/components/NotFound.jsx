import React from "react";
import FuzzyText from "../../reactbits/FuzzyText/FuzzyText";

const NotFound = () => {
  const hoverIntensity = 0.5;
  const enableHover = true;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={hoverIntensity}
        enableHover={enableHover}
      >
        404 - Page Not Found
      </FuzzyText>
    </div>
  );
};

export default NotFound;
