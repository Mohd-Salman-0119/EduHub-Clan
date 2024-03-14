import React from "react";

const CourseCard = ({ course }) => {
  const { title, _id, description } = course;
  
  return (
    <div className="p-4 shadow-sm cursor-pointer" onClick={{}}>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CourseCard;
