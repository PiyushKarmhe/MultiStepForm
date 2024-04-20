const Result = () => {
  return (
    <section className="mx-auto px-5 lg:px-48 max-h-max overflow-y-scroll flex flex-col gap-6 w-screen min-h-screen items-center justify-center justify-items-center place-content-center font-soleil">
      <span className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">
        Learning paths based on your answers
      </span>
      <span className="text-lg text-center font-medium text-gray-500 mb-10 md:mb-10 lg:mb-14">
        Choose one to get started. You can switch anytime.
      </span>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-5 lg:gap-4 items-center justify-evenly w-full md:px-32 lg:px-20">
        <div className="relative flex flex-row gap-6 md:gap-10 lg:gap-8 items-centre justify-items-center place-items-center border-2 border-gray-200 rounded-md shadow-sm p-3 py-5 w-full md:p-4 lg:px-4 lg:w-3/5 lg:h-44 hover:shadow-md hover:border-orange-200 cursor-pointer">
          <div
            type="button"
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-black bg-yellow-400 hover:bg-yellow-500 font-normal rounded-full text-sm px-3 py-1 md:py-1.5 text-center"
          >
            MOST POPULAR
          </div>
          <div className="py-auto my-auto font-bold text-base text-justify text-base md:text-lg">
            Foundational Math
            <span className="inline text-gray-800 font-medium">
              {" "}
              Build foundational skills in algebra, geometry, and probability.
            </span>
          </div>
          <img
            src="../../../../../assets/img/Math_Foundations_WIP_v01_6.gif"
            className="w-auto h-28 rounded-sm"
          />
        </div>
        <div className="relative flex flex-row gap-6 md:gap-10 lg:gap-8 items-centre justify-items-center place-items-center border-2 border-gray-200 rounded-md shadow-sm p-3 py-5 w-full md:p-4 lg:px-4 lg:w-3/5 lg:h-44 hover:shadow-md hover:border-orange-200 cursor-pointer">
          <div className="py-auto my-auto font-bold text-base text-justify text-base  md:text-lg">
            Foundational Math
            <span className="inline text-gray-800 font-medium">
              {" "}
              Build foundational skills in algerba, geometry, and probability.
            </span>
          </div>
          <img
            src="../../../../../assets/img/Math_Foundations_WIP_v01_6.gif"
            className="w-auto h-28 rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default Result;
