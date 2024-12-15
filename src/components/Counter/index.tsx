"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[400px] border mx-auto p-4 rounded-md">
      <h2 className="text-xl font-bold text-center">The counter is {count}</h2>
      <button
        className="block w-full py-2 mt-4 bg-blue-500 text-white rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
