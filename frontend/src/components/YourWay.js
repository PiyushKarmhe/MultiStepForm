import { useEffect } from "react";
import { setContinueState } from "../reducer/ContinueReducer";
import { useDispatch } from "react-redux";

const YourWay = () => {
  const dispatch = useDispatch();
  dispatch(setContinueState({ allow: true }));
  
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5 lg:gap-4 items-center justify-center w-full px-2 md:my-4 lg:my-4 lg:mt-20">
      <video className="h-64 md:h-96 w-full md:w-1/3" autoPlay muted loop>
        <source src="../../../../../assets/img/cheerleader-blorb.mp4" />
      </video>
      <div className="flex flex-col gap-3 md:gap-4 w-full mb-2 md:w-2/4">
        
        <span className="text-4xl text-center md:text-left font-bold">
          You're on your way!
        </span>
        <span className="text-4xl text-center md:text-left font-medium text-gray-600 md:mt-3 lg:mt-5">
        ⭐⭐⭐⭐⭐
        </span>
        <span className="text-base italic text-justify md:text-left font-medium text-gray-600 md:mb-3 lg:mb-5">
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. I now feel confident approaching both technical job
          interviews and real world problem solving situations."
        </span>
        <span className="text-base italic text-justify md:text-left font-medium text-gray-600">
          - Jacob S.
        </span>
      </div>
    </div>
  );
};

export default YourWay;
