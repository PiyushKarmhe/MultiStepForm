import { useState } from "react";
import { setContinueState } from "../reducer/ContinueReducer";
import { useDispatch } from "react-redux";
import { optionsSelected } from "../data/selectedOption";

const Interested = () => {
  const dispatch = useDispatch();
  const n = 5;
  const defaultState = Array.from({ length: n }, () => 0);
  if (optionsSelected["Interested"] !== null) {
    defaultState[optionsSelected["Interested"]] = 1;
    dispatch(setContinueState({ allow: true }));
  }
  const [selected, setselected] = useState(defaultState);

  const handelClick = (e) => {
    setselected((prev) => {
      return prev.map((item, index) => (index === e ? 1 : 0));
    });
    dispatch(setContinueState({ allow: true }));
    optionsSelected["Interested"] = e;
  };

  return (
    <div className="flex flex-col gap-4 lg:gap-6 items-center justify-between w-full px-2 mb-2 md:mb-4 lg:mb-2">
      <span className="text-4xl text-center font-bold">
        Which are you most interested in?
      </span>
      <span className="text-base text-center font-semibold text-gray-500 md:mb-3 lg:mb-5 tracking-wide">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </span>
      <div className="flex flex-col gap-2 md:gap-5 lg:gap-3 items-center justify-evenly w-full md:px-28 lg:px-64">
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[0] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(0)}
        >
          <img
            src="../../../../../assets/img/Fxemoji_u1F5E0.svg.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-normal text-base text-left">
            Learning specific skills to advance my career
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[1] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(1)}
        >
          <img
            src="../../../../../assets/img/ogoship-global-map-bg-lila.svg"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-normal text-base text-left">
            Exploring new topics I'm interested in
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[2] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(2)}
        >
          <img
            src="../../../../../assets/img/skills-math-WulFZ4.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-normal text-base text-left">
            Refreshing my math foundations
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[3] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(3)}
        >
          <img
            src="../../../../../assets/img/istockphoto-1224749399-612x612-no-bg.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-normal text-base text-left">
            Exercising my brain to stay sharp
          </div>
        </button>
        <button
          className={`flex flex-row gap-8 items-centre justify-start border-2 border-gray-200 rounded-md shadow-sm p-2 md:p-4 w-full hover:shadow-md hover:border-orange-200 cursor-pointer ${
            selected[4] ? "shadow-md border-orange-200" : ""
          }`}
          onClick={() => handelClick(4)}
        >
          <img
            src="../../../../../assets/img/png-transparent-black-and-white-eyes-illustration-emoji-eye-emoticon-smiley-sticker-eyes-face-heart-people-no-bg.png"
            className="w-10 h-10"
          />
          <div className="py-auto my-auto font-normal text-base text-left">
            Something else
          </div>
        </button>
      </div>
    </div>
  );
};

export default Interested;
