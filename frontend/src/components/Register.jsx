import { Card, Typography } from "@material-tailwind/react";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Input, Radio, notification } from "antd";
import {
  UserOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { logo } from "../assets/image";
import { Link, useNavigate } from "react-router-dom";
import { CourseDialog } from "./CourseModel";
import { CREATE_USER_MUTATION } from "../graphql/muatation.graphql";
import { useDispatch } from "react-redux";
import { registerSuccess } from "../Redux/Auth/actionType";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [course, setCourses] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    confirmPassword: "",
  });

  const handleOnChange = (type, value) => {
    console.log(value);
    setUser({ ...user, [type]: value });
  };
  // console.log(user);
  const handleOpen = () => {
    setOpen((p) => !p);
  };
  const handleCourses = (data) => {
    setCourses(data);
  };

  // const [value4, setValue4] = useState("Apple");
  const onChange = ({ target: { value } }) => {
    handleOnChange("role", value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formIsValid = true;
    if (!user.name) {
      notification.info({
        message: "Name is required.",
        description: "Please check the form name field.",
      });
      formIsValid = false;
    }
    if (!user.email.trim()) {
      notification.info({
        message: "Email is required",
        description: "Please check the form email field.",
      });
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      notification.info({
        message: "Email address is invalid",
        description: "Please check the email address.",
      });
      formIsValid = false;
    }
    console.log(user.password);
    if (!user.password.trim()) {
      notification.info({
        message: "Password is required",
        description: "Please check the form password field.",
      });
      formIsValid = false;
    } else if (user.password.trim().length < 6) {
      notification.info({
        message: "Password must be at least 6 characters long",
      });
      formIsValid = false;
    }

    if (!user.confirmPassword.trim()) {
      notification.info({
        message: "Confirm Password is required",
        description: "Please check the form confirm password field.",
      });
      formIsValid = false;
    } else if (user.confirmPassword.trim() !== user.password.trim()) {
      notification.info({
        message: "Passwords do not match",
        description: "Please check provided passwords not match",
      });
      formIsValid = false;
    }
    console.log(user);

    if (formIsValid) {
      try {
        const { data } = await createUser({
          variables: {
            name: user.name,
            email: user.email,
            role: user.role,
            password: user.password,
          },
        });

        notification.success({ message: "Registeration Successfull" });
        dispatch(registerSuccess(data?.createUser?.token));
      } catch (error) {
        notification.error({
          message: "Registeration failed",
          description: `The user is already exist.`,
        });
      }
    }
  };

  console.log(course);
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
      <Card className="flex flex-col gap-3 items-center p-4 w-11/12 sm:w-3/4 md:w-2/3 lg:w-2/4 xl:w-4/12 shadow-lg shadow-gray-300 ">
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
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => {
              handleOnChange("password", e.target.value);
            }}
          />
          <Input.Password
            placeholder="Confirm Password"
            size="large"
            prefix={<LockOutlined />}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={(e) => {
              handleOnChange("confirmPassword", e.target.value);
            }}
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
            <Button
              type="dashed"
              size={"middle"}
              className="bg-blue-500"
              onClick={handleOpen}
            >
              Choose Course
            </Button>
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
      {open && (
        <CourseDialog
          handleOpen={handleOpen}
          open={open}
          handleCourses={handleCourses}
        />
      )}
    </div>
  );
};

export default Register;
