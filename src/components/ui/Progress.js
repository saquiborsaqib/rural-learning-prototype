import React from "react";

const Progress = ({ value }) => (
  <div className="w-full bg-gray-200 rounded h-4">
    <div className="bg-green-500 h-4 rounded" style={{ width: `${value}%` }}></div>
  </div>
);

export default Progress;
