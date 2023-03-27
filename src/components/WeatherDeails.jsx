import React, { useState, useEffect } from "react";
import { IoIosSunny, IoMdPartlySunny } from "react-icons/io";
import { AiFillCloud } from "react-icons/ai";
import { BsFillCloudHailFill } from "react-icons/bs";
import Card from "../shared/Card";

const WeatherDeails = (props) => {
  // console.log(props.cityDetails);
  const [cityDetails, setcityDetails] = useState("");
  const [imgDetails, setImgDetails] = useState("");
  const [temp, setTemp] = useState("C");
  const tooggleTempC = () => {
    console.log("helllo", temp);
    if (temp === "F") {
      setTemp("C");
    }
  };
  const tooggleTempF = () => {
    if (temp === "C") {
      setTemp("F");
    }
  };
  useEffect(() => {
    setcityDetails(props.cityDetails);
    console.log(cityDetails);
    setImgDetails("https:" + cityDetails.current.condition.icon);
    console.log(imgDetails);
  }, [props.cityDetails, cityDetails, imgDetails]);

  return (
    <div>
      <div className="text-white">
        <Card>
          <div className="card w-96  bg-gray-600 shadow-xl rounded-sm">
            {/* <figure>
            <img src="./images/weather.jpg" alt="Shoes" />
          </figure> */}
            <div className="card-body">
              <h2 className="card-title">{cityDetails?.location?.name}</h2>
              <div className="flex-col justify-between items-center ">
                <div className="icons text-6xl flex items-center justify-evenly w-full">
                  {/* {props.cityDetails?.current?.cloud !== 0 && (
                    <IoIosSunny style={{ color: "yellow" }} />
                  )}
                  <IoMdPartlySunny />
                  <AiFillCloud />
                  {props.cityDetails?.current?.cloud === 0 && (
                    <BsFillCloudHailFill style={{ color: "lightblue" }} />
                  )} */}
                  <img src={imgDetails} alt="sdsd" className="h-32 w-36" />
                </div>
                <div className="text-8xl text-center my-2 mx-2">
                  {temp === "C" && props.cityDetails?.current?.temp_c + "C"}
                  {temp === "F" && props.cityDetails?.current?.temp_f + "F"}
                </div>
              </div>

              <p className="capitalize"></p>
              <div className="card-actions justify-end">
                <p className="text-white cursor-pointer" onClick={tooggleTempC}>
                  C
                </p>
                <p className="text-white cursor-pointer" onClick={tooggleTempF}>
                  F
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WeatherDeails;
