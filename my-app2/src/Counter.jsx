import React, { useState } from "react";
function Counter() {
  let [count, setCount] = new useState(0);
  const increaseCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decreaseCount = () => {
    if (count > 0) setCount(count - 1);
    else {
      alert("Counter Can not be less than Zero");
    }
    console.log(count);
  };

  return (
    <div>
      {console.log("couter renders")}
      <p>The Value of count is: {count}</p>
      <button className="countButton" onClick={increaseCount}>
        Increase
      </button>
      <button className="countButton" onClick={decreaseCount}>
        Decrease
      </button>
    </div>
  );
}
export default Counter;
