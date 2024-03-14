import React from "react";
import { book, courses, lecture, plus, users } from "../assets/image";
import { useSelector } from "react-redux";
import { Card, CardBody } from "@material-tailwind/react";

const Dashboard = () => {
  const coursesData = useSelector((state) => state.courses.courses);
  const lecturesData = useSelector((state) => state.lectures.lectures);
  const usersData = useSelector((state) => state.users.users);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 text-white">
        <div className="flex justify-between px-3 items-center bg-green-700 rounded-lg">
          <div className="flex items-center gap-2 p-2">
            <div className="rounded-full ">
              <img src={courses} height={40} width={40} />
            </div>
            <h1 className="font-semibold">Courses</h1>
          </div>
          <h1 className="font-semibold">{coursesData?.length}</h1>
        </div>

        <div className="flex justify-between px-3 items-center bg-yellow-700 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2 ">
              <img src={lecture} height={40} width={40} />
            </div>
            <h1 className="font-semibold">Lectures</h1>
          </div>
          <h1 className="font-semibold">{lecturesData?.length}</h1>
        </div>
        <div className="flex justify-between px-3 items-center bg-blue-500 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2 ">
              <img src={users} height={40} width={40} />
            </div>
            <h1 className="font-semibold">Users</h1>
          </div>
          <h1 className="font-semibold">{usersData?.length}</h1>
        </div>
        <div className="flex justify-between px-3 items-center bg-black rounded-lg cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="rounded-full p-2 ">
              <img src={plus} height={35} width={35} />
            </div>
            <h1 className="font-semibold">Create Course</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 my-5">
        {lecturesData?.map((item) => (
          <Card key={item._id} className="bg-blue-700 text-white">
            <CardBody className="flex justify-between items-center">
              <div className="flex gap-5">
                <div className="rounded-xl px-3 py-2 bg-blue-gray-300 flex items-center justify-center">
                  <img src={book} height={35} width={35} />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl">{item.title}</h1>
                  <p>Created by {item.instructor}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <h>{item.start_time} PM</h>
                <h>{item.end_time} PM</h>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
