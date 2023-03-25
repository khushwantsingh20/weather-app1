import React from "react";

const CityList = (props) => {
  const onClose = (e, ele) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="w-64">
        <ul className="menu bg-base-100 my-2 w-full">
          {props.list.map((ele, i) => (
            <li className="bordered" key={i}>
              {ele.name}, {ele.region}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CityList;
