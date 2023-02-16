import React from "react";

const Spinner = () => {
  return (
    <div data-testid="div">
      <div className="flex items-center justify-center">
        <div className="w-6 h-6  border-2 border-dashed rounded-full animate-spin border-white mt-2"></div>
      </div>
    </div>
  );
};

export default Spinner;
