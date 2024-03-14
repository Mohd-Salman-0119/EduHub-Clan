import React from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Button, Input } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";

const CreateLectureDialog = ({ handleConfirm, handleOpen, open }) => {
  return (
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
          placeholder="Title"
          className="w-full"
          onChange={(e) => {}}
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
  );
};

export default CreateLectureDialog;
