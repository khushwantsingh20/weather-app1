import React from "react";

const Card = (props) => {
  return (
    <>
      <div
        className="p-2 m-2 bg-white text-black
      h-full w-2/4 text-center
      "
      >
        {props.children}
      </div>
    </>
  );
};

export default Card;
