import React from "react";
import { FaStar } from "react-icons/fa";

const CourseCardDash = () => {
  return (
    <div
      className="bg-cover rounded-2xl mr-4"    >
      <div className="h-80 w-64 flex flex-col justify-between">
        <div className="text-sm text-white p-4">
          <p>Trending</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span>oioi</span>
          </div>
        </div>

        <div className="bg-white text-black rounded-2xl p-4 m-2">
          <div className="text-lg font-semibold">teste</div>

          <div className="text-base flex justify-between mt-2">
            <p>teste</p>
            <p className="pr-4">aaaaaah</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardDash;
