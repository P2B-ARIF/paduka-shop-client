import React from "react";
import Slider from "@mui/material/Slider";

const PriceRange = () => {
  return (
    <div className="my-5 rounded-lg border-2 border-pink-500">
      <ul>
        <li className="flex justify-between my-2 py-2 px-5 text-pink-500 font-semibold border-b-2 border-gray-400">
          Price
          <div className="w-[70px]">
            <input
              type="number"
              defaultValue={500}
              className="text-center w-full bg-pink-500 text-white pt-1 number__input"
              disabled
            />
          </div>
        </li>
        <li className="flex justify-between my-2 py-2  px-5 mt-5">
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={150}
            marks
            min={200}
            max={1500}
            className="text-pink-500 "
          />
        </li>
      </ul>
    </div>
  );
};

export default PriceRange;
