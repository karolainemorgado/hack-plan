import React from "react";
import { FaStar } from "react-icons/fa";

const CourseCardCareer = ({ career, onClick, ratingIcon = FaStar }) => {
  if (!career || !career.course) {
    return <div>Loading screen...</div>;
  }

  return (
    <div onClick={onClick} className="card-wrapper cursor-pointer">
      <div className="rating-section flex items-center p-4">
        {ratingIcon && <ratingIcon className="text-yellow-400 mr-1" />}
        <span>{career.course.rating}</span>
      </div>
      <div className="course-details bg-gray-100 text-gray-900 rounded-3xl h-24 m-4 p-4">
        <p className="course-name text-2xl font-medium">{career.careerName}</p>
        <div className="course-meta text-lg flex justify-between mt-1">
          <p>{career.course.price}</p>
          <p>{career.course.classHours}h</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCardCareer;
