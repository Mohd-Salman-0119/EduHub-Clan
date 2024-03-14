import React, { useState } from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Button, Input } from "antd";
import { EllipsisOutlined, UserOutlined } from "@ant-design/icons";
import { CourseDialog } from "./CourseModel";

const CreateLectureDialog = ({ handleConfirm, handleOpen, open }) => {
  const [openCourse, setOpenCourse] = useState(false);

  const handleOpenCourse = () => setOpenCourse((p) => !p);
  const handleConfirmCourse = () => {};

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-y-scroll overflow-auto"
        size="sm"
      >
        <DialogHeader>Create Lecture</DialogHeader>
        <DialogBody className="flex flex-col gap-2">
          <Input
            size="large"
            placeholder="Title"
            className="w-full"
            onChange={(e) => {}}
          />
          <Input
            size="large"
            placeholder="Instrutor"
            className="w-full"
            onChange={(e) => {}}
          />
          <Input
            size="large"
            placeholder="Meeting link (ex: Goodle, Zoom)"
            className="w-full"
            onChange={(e) => {}}
          />

          <div className="flex gap-2">
            <Input
              size="large"
              placeholder="Start Time"
              className="w-full"
              onChange={(e) => {}}
            />
            <Input
              size="large"
              placeholder="End Time"
              className="w-full"
              onChange={(e) => {}}
            />
          </div>
          <Input
            placeholder="Course Id"
            suffix={<EllipsisOutlined onClick={handleOpenCourse} />}
          />
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
      {openCourse && (
        <CourseDialog handleOpen={handleOpenCourse} open={openCourse} />
      )}
    </>
  );
};

export default CreateLectureDialog;
