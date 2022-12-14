import React, { memo } from "react";
import { dataNearby } from "./dataNearby";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchLocation } from "../../redux/slices/searchSlice";

function Nearby() {
  let dispatch = useDispatch();
  return (
    <div className="nearby " id="nearby">
      <div className="xl:w-[1120px] px-3 w-full mx-auto my-10 text-left">
        <h2 className="mb-4 text-3xl font-bold lg:mb-8 md:text-3xl lg:text-4xl">
          Explore Nearby
        </h2>
        <div className="grid grid-cols-2 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-4">
          {dataNearby.map((item, i) => {
            return (
              <Link
                to={`/listhotel/${item._id}/${item.long}/${item.lat}`}
                key={i}
              >
                <div
                  className="flex-col items-start md:items-center flex p-2 duration-300 md:flex-row md:p-3 gap-x-4 active:scale-105 active:bg-gray-200 active:bg-opacity-40 rounded-xl hover:scale-105"
                  onClick={() => {
                    dispatch(setSearchLocation(item._id));
                  }}
                >
                  <div className="w-16 h-16 rounded-md overflow-hidden">
                    <img src={item.src} alt="" />
                  </div>
                  <div className="mt-2 md:mt-0 text-left">
                    <h3 className="text-sm lg:text-base font-medium text-gray-500">
                      {item.name}
                    </h3>
                    <span className="text-sm lg:text-base text-gray-300">
                      {item.time}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default memo(Nearby);
