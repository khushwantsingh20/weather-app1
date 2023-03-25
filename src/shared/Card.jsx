import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="p-2 m-2">{props.children}</div>
    </>
  );
};

export default Card;
