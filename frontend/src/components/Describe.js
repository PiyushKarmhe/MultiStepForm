import { useEffect, useState } from "react";
import { setContinueState } from "../reducer/ContinueReducer";
import { useDispatch } from "react-redux";
import { optionsSelected } from "../data/selectedOption";

const Describe = () => {
  const dispatch = useDispatch();
  const n = 6;
  const defaultState = Array.from({ length: n }, () => 0);
  if (optionsSelected["Describe"] !== null) {
    defaultState[optionsSelected["Describe"]] = 1;
    dispatch(setContinueState({ allow: true }));
  }
  const [selected, setselected] = useState(defaultState);

  const handelClick = (e) => {
    setselected((prev) => {
      return prev.map((item, index) => (index === e ? 1 : 0));
    });
    dispatch(setContinueState({ allow: true }));
    optionsSelected["Describe"] = e;
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-between w-full px-2 mb-2 md:mb-4 lg:mb-2">
      <span className="text-4xl text-center font-bold">
        Which describes you best?
      </span>
      <span className="text-base text-center font-semibold text-gray-500 md:mb-3 lg:mb-5">
        This will help us personalize your experience.
      </span>
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-3 items-center justify-evenly w-full md:px-28 lg:px-64">
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[0] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(0)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_Life-Stage=Student_830823629321515.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-semibold text-base text-left">
            Student{" "}
            <span className="text-gray-400">or soon to be enrolled</span>
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[1] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(1)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_Life-Stage=Professional_3183921264115743.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-semibold text-base text-left">
            Professional{" "}
            <span className="text-gray-400">pursuing a career</span>
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[2] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(2)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_Life-Stage=Parent_6858243195481246.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-semibold text-base text-left">
            Parent{" "}
            <span className="text-gray-400">of a school-age child</span>
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[3] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(3)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_Export_Retired (1)_42157333845339884.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-semibold text-base text-left">
            Lifelong learner{" "}
            <span className="text-gray-400"></span>
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[4] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(4)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_Life-Stage=Teacher_3477887921150866.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-semibold text-base text-left">
            Teacher{" "}
            <span className="text-gray-400"></span>
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[5] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(5)}
        >
          <img
            src="../../../../../assets/img/UkI2pO4KD0xXQLHkN1GG_Life-Stage=Other_39497974702587735.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-semibold text-base text-left">
            Other{" "}
            <span className="text-gray-400"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Describe;
