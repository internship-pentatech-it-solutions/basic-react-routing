import React from "react";

const Loader = () => {
  return (
    <div className="custom-width h-[90vh] flex items-center justify-center">
      <div className="w-[200px] h-[200px] border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
