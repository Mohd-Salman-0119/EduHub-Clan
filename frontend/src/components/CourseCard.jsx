import React from "react";

const CourseCard = ({ course, isSelected, toggleCourseSelection }) => {
  const { title, _id, description } = course;

  const handleCardClick = () => {
    toggleCourseSelection(_id);
  };

  return (
    <div
      className={`py-2 px-3 rounded-lg border-[1px] text-black ${
        isSelected ? "bg-blue-500 text-white" : "border-[#d9d9d9]"
      } shadow-md cursor-pointer`}
      onClick={handleCardClick}
    >
      <h1 className="text-sm font-semibold">{title}</h1>
    </div>
  );
};

export default CourseCard;
