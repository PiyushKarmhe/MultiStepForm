import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Describe from "../components/Describe";
import Interested from "../components/Interested";
import RightPlace from "../components/RightPlace";
import MathsLevel from "../components/MathsLevel";
import YourWay from "../components/YourWay";
import Loader from "../components/Loader";
import { decreaseStep, increaseStep } from "../reducer/StepReducer";
import { setContinueState } from "../reducer/ContinueReducer";

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step.step);
  const continueState = useSelector((state) => state.continueState.allow);
  let ref = useRef(step);
  const [pageNo, setPageNo] = useState(0);

  const stepToDisplay = (step) => {
    ref.current = step;
    switch (ref.current) {
      case 0:
        return <Describe />;
      case 1:
        return <Interested />;
      case 2:
        return <RightPlace />;
      case 3:
        return <MathsLevel />;
      case 4:
        return <YourWay />;
      default:
        return <Loader />;
    }
  };

  useEffect(() => {
    dispatch(setContinueState({ allow: false }));
  }, [step]);

  return (
    <section className="mx-auto px-5 lg:px-48 max-h-max overflow-y-scroll font-soleil">
      <nav className="flex flex-row justify-between items-center py-5 md:mt-2 lg:mt-5">
        {step > 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.3}
            stroke="currentColor"
            className="w-6 h-6 mr-5 lg:mr-3 cursor-pointer"
            onClick={() => {
              dispatch(decreaseStep());
              setPageNo((p) => p + 1);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.3}
            stroke="currentColor"
            className="w-6 h-6 mr-5 lg:mr-3 invisible"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        )}

        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            class="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
        </div>

        {pageNo ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.3}
            stroke="currentColor"
            className="w-6 h-6 ml-5 lg:ml-3 cursor-pointer"
            onClick={() => {
              dispatch(increaseStep());
              setPageNo((p) => p - 1);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.3}
            stroke="currentColor"
            className="w-6 h-6 ml-5 lg:ml-3 invisible"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </nav>
      {continueState ? (
        <div className="flex flex-col gap-4 items-center justify-between">
          {stepToDisplay(step)}
          <button
            type="button"
            class="text-white  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              dispatch(increaseStep());
            }}
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-center justify-between">
          {stepToDisplay(step)}
          <button
            type="button"
            class="text-white opacity-20  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-10 py-2.5 text-center me-2 mb-2 cursor-not-allowed"
            disabled
          >
            Continue
          </button>
        </div>
      )}
    </section>
  );
};

export default MultiStepForm;
