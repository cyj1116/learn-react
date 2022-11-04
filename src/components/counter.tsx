import React, { memo, useState } from "react";

const Counter = memo(() => {
  const [count, setCount] = useState(0);

  const handleCount = (num: number) => {
    let c = count + num;
    setCount(c);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          className="border-solid border-black border-[1px]"
          onClick={() => handleCount(1)}
        >
          +1
        </button>
        <button
          className="border-solid border-black border-[1px]"
          onClick={() => handleCount(-1)}
        >
          -1
        </button>
      </div>
    </div>
  );
});

export default Counter;
