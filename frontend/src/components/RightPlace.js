import { useEffect } from "react";
import { setContinueState } from "../reducer/ContinueReducer";
import { useDispatch } from "react-redux";

const RightPlace = () => {
  const dispatch = useDispatch();
  dispatch(setContinueState({ allow: true }));
  
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-4 items-center justify-center w-full px-2 my-4 md:my-4 lg:my-4 lg:mt-20">
      <video className="h-80 md:h-96 w-full md:w-1/3" autoPlay muted loop>
        <source src="../../../../../assets/img/pulley-blob.mp4" />
      </video>      
      <div className="flex flex-col gap-6 md:gap-4 w-full md:w-2/4">
        <span className="text-4xl text-center md:text-left font-bold">
          You're in the right place
        </span>
        <span className="text-base text-justify md:text-left font-medium text-gray-600 md:mb-3 lg:mb-5">
          Brilliant gets you hands-on to help improve your professional skills
          and knowledge. You'll interact with concepts and solve fun problems in
          math, science, and computer science.
        </span>
      </div>
    </div>
  );
};

export default RightPlace;
