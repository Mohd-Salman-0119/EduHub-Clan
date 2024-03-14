import { Card, Typography } from "@material-tailwind/react";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Input, Radio } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { logo } from "../assets/image";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { CourseDialog } from "./CourseModel";
import { CREATE_USER_MUTATION } from "../graphql/muatation.graphql";

const optionsWithDisabled = [
  {
    label: "Student",
    value: "STUDENT",
  },
  {
    label: "Admin",
    value: "ADMIN",
  },
];

const Register = () => {
  const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleOnChange = (type, value) => {
    setUser({ ...user, [type]: value });
  };
  const handleOpen = () => {
    setOpen((p) => !p);
  };

  // const [value4, setValue4] = useState("Apple");
  const onChange = ({ target: { value } }) => {
    handleOnChange("role", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createUser({
        variables: {
          name: user.name,
          email: user.email,
          role: user.role,
          password: user.password,
        },
      });
      console.log("User registered:", data.createUser);
      // Optionally, you can handle successful registration here (e.g., show a success message).
    } catch (error) {
      console.error("Error registering user:", error);
      // Optionally, you can handle errors here (e.g., display an error message).
    }
  };
  return (
    <div className="flex items-center justify-center flex-col w-full h-svh custom-image">
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          className="flex gap-3 items-end"
        >
          <img src={logo} className="w-12 h-12" />
          <h1 className="font-medium text-4xl ">EduHub</h1>
        </Typography>
      </div>
      <Card className="flex flex-col gap-3 items-center p-4 w-4/12 shadow-lg shadow-gray-300 ">
        <Typography className="text-2xl text-black font-semibold">
          Sign Up
        </Typography>
        <div className="w-full flex flex-col gap-2">
          <Input
            size="large"
            placeholder="Name"
            prefix={<UserOutlined />}
            onChange={(e) => {
              handleOnChange("name", e.target.value);
            }}
          />
          <Input
            size="large"
            placeholder="E-mail"
            prefix={<MailOutlined />}
            onChange={(e) => {
              handleOnChange("email", e.target.value);
            }}
          />
          <Input.Password
            placeholder="Password"
            size="large"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? (
                <EyeTwoTone />
              ) : (
                <EyeInvisibleOutlined
                  onChange={(e) => {
                    handleOnChange("password", e.target.value);
                  }}
                />
              )
            }
          />
          <div className="flex justify-between">
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChange}
              // value={value4}
              optionType="button"
              buttonStyle="solid"
              className="w-full"
            />
          </div>

          <Button
            type="primary"
            size={"large"}
            className="bg-blue-500"
            onClick={handleSubmit}
          >
            Register
          </Button>
        </div>
        <div className="flex items-center">
          <p>Already have an account.</p>
          <Link className="text-blue-700 cursor-pointer" to={"/login"}>
            Login
          </Link>
        </div>
      </Card>
      <div className="mt-9 flex flex-col items-center gap-5 text-gray-600">
        <div className="flex gap-3 items-center">
          <Typography>Privacy Policy</Typography>
          <Typography>Terms and Conditions</Typography>
        </div>
        <Typography>&copy; 2024 by EduHub</Typography>
      </div>
      {open && <CourseDialog handleOpen={handleOpen} open={open} />}
    </div>
  );
};

export default Register;
