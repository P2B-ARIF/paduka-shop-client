import Slider from "@mui/material/Slider";

const PriceRange = () => {
  return (
    <div className="mb-3 border-2 ">
      <ul>
        <li className="flex justify-between my-2 py-2 px-5">
          Price
          <div className="w-[70px]">
            <input
              type="number"
              defaultValue={500}
              className="text-center w-full bg-blue-gray-200"
            />
          </div>
        </li>

        <li className="flex justify-between my-2 py-2 hover:bg-gray-100 px-5">
          <Slider
            defaultValue={30}
            valueLabelDisplay="auto"
            step={150}
            marks
            min={200}
            max={1500}
          />
        </li>
      </ul>
    </div>
  );
};

export default PriceRange;
