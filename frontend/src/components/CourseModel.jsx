import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Button } from "antd";
import CourseCard from "./CourseCard";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSE } from "../graphql/queries.graphql";

export function CourseDialog({ handleOpen, open, handleCourses }) {
  const { loading, error, data } = useQuery(GET_ALL_COURSE);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const toggleCourseSelection = (courseId) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    } else if (selectedCourses.length < 3) {
      setSelectedCourses([...selectedCourses, courseId]);
    } else {
      message.warning("You can only select up to three courses.");
    }
  };

  const handleConfirm = () => {
    // Pass selected course IDs back to the parent component
    handleCourses(selectedCourses);
    handleOpen();
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-y-scroll overflow-auto"
        size="md"
      >
        <DialogHeader>Select Courses</DialogHeader>
        <DialogBody className="grid grid-cols-4 gap-1">
          {data?.courses.map((course) => (
            <CourseCard
              course={course}
              key={course?._id}
              isSelected={selectedCourses.includes(course._id)}
              toggleCourseSelection={toggleCourseSelection}
            />
          ))}
        </DialogBody>
        <DialogFooter className="flex gap-2">
          <Button type="dashed" size={"middle"} onClick={handleOpen}>
            <span>Cancel</span>
          </Button>
          <Button
            type="primary"
            size={"middle"}
            className="bg-blue-500"
            onClick={handleConfirm}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
