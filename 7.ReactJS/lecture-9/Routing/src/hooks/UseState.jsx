import React from "react";
import { useState } from "react";

// const [state , setState] = useState(initialValue)

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    return setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      return setCount(count - 1);
    } else {
      setCount(count);
    }
  };

  return (
    <div>
      <h1 className="heading bg-lime-600 font-bold text-lg p-5 text-center">
        This is useState Hook In ReactJS
      </h1>
      <div className="container mx-auto">
        <p className="btn my-2 text-center border-2 bg-lime-500 text-xl p-6 font-bold">
          Count:- {count}
        </p>

        <div className="text-center p-3 ">
          <button onClick={handleIncrement} className="btn mx-5 border-3 p-3 bg-lime-300">
            Increment
          </button>
          <button onClick={handleDecrement} className="btn mx-5 border-3 p-3  bg-lime-400">
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
