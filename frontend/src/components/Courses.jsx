import React, { useState } from "react";
import { Button, Card, Input } from "@material-tailwind/react";
import { plus } from "../assets/image";
import { useSelector } from "react-redux";

const Courses = () => {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  const coursesData = useSelector((state) => state.courses.courses);

  return (
    <Card className="p-3">
      <div className="flex justify-between items-center">
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="black"
            label="Search here"
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="black"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
        <div className="flex justify-between px-3 items-center bg-black rounded-lg cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2">
              <img src={plus} height={20} width={20} />
            </div>
            <h1 className="font-semibold text-white">Create Course</h1>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="grid-cols-3 grid gap-3">
          {coursesData?.map((item) => (
            <div className="shadow-md border-gray-700 p-3 shadow-gray-200 rounded-md ">
              <h1 className="text-xl">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Courses;
