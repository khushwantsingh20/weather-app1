import React from "react";

const CityList = (props) => {
  return (
    <>
      <div className="w-64">
        <ul className="menu bg-base-100 my-2 w-full">
          {props.list.map((ele, i) => (
            <li className="bordered" key={i}>
              {ele.label}, {ele.region}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CityList;
