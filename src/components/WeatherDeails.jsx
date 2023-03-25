import React from "react";
import { IoIosSunny, IoMdPartlySunny } from "react-icons/io";
import { AiFillCloud } from "react-icons/ai";
import { BsFillCloudHailFill } from "react-icons/bs";
import Card from "../shared/Card";
const WeatherDeails = () => {
  return (
    <div>
      <div className="text-white">
        <Card>
          <div className="card w-96  bg-gray-600 shadow-xl rounded-sm">
            {/* <figure>
            <img src="./images/weather.jpg" alt="Shoes" />
          </figure> */}
            <div className="card-body">
              <h2 className="card-title">Weather</h2>
              <IoIosSunny />
              <IoMdPartlySunny />
              <AiFillCloud />
              <BsFillCloudHailFill />
              <p className="capitalize">jaipur</p>
              <div className="card-actions justify-end">
                <p className="text-white">C</p>
                <p className="text-white">F</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WeatherDeails;
