import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { AiOutlineRight } from "react-icons/ai";

const Size = () => {
  return (
    <div className="mb-3 border-2 ">
      <ul>
        <li className="flex justify-between my-2 py-2 hover:bg-gray-100 px-5">
          Shoes Size
          <AiOutlineRight />
        </li>
        <li className="my-2 px-5">
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <div className="grid grid-cols-3 gap-2 mx-auto justify-center">
                <FormControlLabel value="38" control={<Radio />} label="38" />
                <FormControlLabel value="39" control={<Radio />} label="39" />
                <FormControlLabel value="40" control={<Radio />} label="40" />
                <FormControlLabel value="41" control={<Radio />} label="41" />
                <FormControlLabel value="42" control={<Radio />} label="42" />
                <FormControlLabel value="43" control={<Radio />} label="43" />
                <FormControlLabel value="44" control={<Radio />} label="44" />
              </div>
            </RadioGroup>
          </FormControl>
        </li>
      </ul>
    </div>
  );
};

export default Size;
