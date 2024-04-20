import { useState } from "react";
import { setContinueState } from "../reducer/ContinueReducer";
import { useDispatch } from "react-redux";
import { optionsSelected } from "../data/selectedOption";

const MathsLevel = () => {
  const dispatch = useDispatch();
  const n = 4;
  const defaultState = Array.from({ length: n }, () => 0);
  if (optionsSelected["MathsLevel"] !== null) {
    defaultState[optionsSelected["MathsLevel"]] = 1;
    dispatch(setContinueState({ allow: true }));
  }
  const [selected, setselected] = useState(defaultState);

  const handelClick = (e) => {
    setselected((prev) => {
      return prev.map((item, index) => (index === e ? 1 : 0));
    });
    dispatch(setContinueState({ allow: true }));
    optionsSelected["MathsLevel"] = e;
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-between w-full px-2 my-4 md:mb-4 md:mb-10 md:mt-20">
      <span className="text-4xl text-center font-bold">
        What is your math comfort level?
      </span>
      <span className="text-base text-center font-semibold text-gray-500 mb-4 md:mb-6 lg:mb-10 tracking-wide">
        Choose the highest level you feel confident in <span className="text-lg">−</span> you can always adjust
        later.
      </span>
      <div className="flex flex-col md:flex-row lg:flex-nowrap gap-2 md:gap-5 lg:gap-3 items-center justify-evenly w-full md:px-28 lg:px-28">
        <button
          className={`flex flex-col gap-6 md:gap-8 lg:gap-6 items-centre justify-between place-items-center border-2 border-gray-200 rounded-md shadow-sm p-5 md:p-6 md:py-3 lg:px-9 lg:py-4 w-52 md:w-1/4 h-48 md:h-44 lg:h-52 hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[0] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(0)}
        >
          <img
            src="../../../../../assets/img/arithmetic-pC3bWR.png"
            className="w-10/12 md:w-auto lg:w-auto h-auto md:h-32"
          />
          <div className="py-2 font-normal text-base text-center">
            Arithmetic
            <br />
            <span className="text-gray-500 text-xl">Introductory</span>
          </div>
        </button>
        <button
          className={`flex flex-col gap-6 md:gap-8 lg:gap-6 items-centre justify-between place-items-center border-2 border-gray-200 rounded-md shadow-sm p-5 md:p-6 md:py-3 lg:px-9 lg:py-4 w-52 md:w-1/4 h-48 md:h-44 lg:h-52 hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[1] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(1)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_number_08117739254383571.png"
            className="w-10/12 md:w-auto lg:w-auto h-auto md:h-32"
          />
          <div className="py-2 font-normal text-base text-center">
            Basic Algebra
            <br />
            <span className="text-gray-500 text-xl">Foundational</span>
          </div>
        </button>
        <button
          className={`flex flex-col gap-6 md:gap-8 lg:gap-6 items-centre justify-between place-items-center border-2 border-gray-200 rounded-md shadow-sm p-5 md:p-6 md:py-3 lg:px-9 lg:py-4 w-52 md:w-1/4 h-48 md:h-44 lg:h-52 hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[2] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(2)}
        >
          <img
            src="../../../../../assets/img/intermediate-algebra-HlLTYk.png"
            className="w-10/12 md:w-auto lg:w-auto h-auto md:h-32"
          /> 
          <div className="py-2 font-normal text-base text-center">
            Intermediate Algebra
            <br />
            <span className="text-gray-500 text-xl">Intermediate</span>
          </div>
        </button>
        <button
          className={`flex flex-col gap-6 md:gap-8 lg:gap-6 items-centre justify-between place-items-center border-2 border-gray-200 rounded-md shadow-sm p-5 md:p-6 md:py-3 lg:px-9 lg:py-4 w-52 md:w-1/4 h-48 md:h-44 lg:h-52 hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[3] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(3)}
        >
          <img
            src="../../../../../assets/img/Frame_2-qvqAR5.png"
            className="w-10/12 md:w-auto lg:w-auto h-auto md:h-32"
          />
          <div className="py-2 font-normal text-base text-center">
            Calculus
            <br />
            <span className="text-gray-500 text-xl">Advance</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MathsLevel;
