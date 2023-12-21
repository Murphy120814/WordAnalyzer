import React from "react";

function Counter({ type, value }) {
  return (
    <div className="min-w-[100px] min-h-full flex flex-col justify-between items-center gap-2">
      <h1 className="text-2xl font-bold">{type}</h1>
      <span>{value}</span>
    </div>
  );
}

export default Counter;
