import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CourseCard from "./CourseCard";
import { useQuery } from "@apollo/client";
import { GET_ALL_COURSE } from "../graphql/queries.graphql";

export function CourseDialog({ handleOpen, open }) {
  const { loading, error, data } = useQuery(GET_ALL_COURSE);

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-y-scroll overflow-auto"
        size="xl"
      >
        <DialogHeader>Select Courses</DialogHeader>
        <DialogBody className="grid grid-cols-4 gap-1">
          {data?.courses.map((course) => (
            <CourseCard course={course} key={course?._id} />
          ))}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
