import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center space-x-1 flex-col">
      <div className="grid grid-cols-8 grid-rows-8 gap-1">
        {/* Row 1 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 2 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 3 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 4 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 5 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 6 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 7 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>

        {/* Row 8 */}
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-black animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
        <div className="block w-2 h-2 bg-green-600 animate-growBlock"></div>
      </div>
      <p className="mt-2">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
