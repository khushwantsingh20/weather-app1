import { debounce } from "lodash";
import React from "react";
import { useRef } from "react";

const UseRefPrac = () => {
  const inputValueRef = useRef("");
  let counterRef = useRef(0);
  const onChangeHandler = debounce(() => {
    console.log(inputValueRef.current.value);
  }, 1000);
  const onCounterHandler = () => {
    console.log("clicked");
    setInterval(() => {
      counterRef.current = counterRef.current + 1;
      console.log(counterRef.current);
    }, 500);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">USE REF</h1>
      <div className="flex justify-center items-center mt-3">
        <input
          className="input"
          type="text"
          ref={inputValueRef}
          onChange={onChangeHandler}
          placeholder="type here..."
        />
      </div>
      <div className="flex justify-center items-center">
        <button onClick={onCounterHandler}>CLICK</button>
      </div>
      <p className="text-center">{counterRef.current}</p>
    </div>
  );
};

export default UseRefPrac;
