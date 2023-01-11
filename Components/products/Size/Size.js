import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import BpCheckbox from "@mui/material/Checkbox";
import { Checkbox } from "@material-tailwind/react";
import { GoTextSize } from "react-icons/go";
import React from "react";


const Size = () => {
  return (
    <div className="mb-3 rounded-lg border-2 border-pink-500 ">
      <ul>
        <li className="flex justify-between my-2 py-2 px-5 text-pink-500 font-semibold border-b-2 border-gray-400">
          Shoes Size
          <GoTextSize />
        </li>
        <li className="my-2 px-5">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div className="grid grid-cols-3 gap-2 mx-auto justify-center">
                <FormControlLabel  value="38" control={<Radio />} label="38" />
                <FormControlLabel  value="39" control={<Radio />} label="39" />
                <FormControlLabel  value="40" control={<Radio />} label="40" />
                <FormControlLabel  value="41" control={<Radio />} label="41" />
                <FormControlLabel  value="42" control={<Radio />} label="42" />
                <FormControlLabel  value="43" control={<Radio />} label="43" />
                <FormControlLabel  value="44" control={<Radio />} label="44" />


              </div>
            </RadioGroup>
          </FormControl>
        </li>
      </ul>
    </div>
  );
};

export default Size;
