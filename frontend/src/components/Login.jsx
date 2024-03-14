import { Card, Typography } from "@material-tailwind/react";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Input, Radio } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { logo } from "../assets/image";
import { Link } from "react-router-dom";
import { LOGIN_USER_MUTATION } from "../graphql/muatation.graphql";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER_MUTATION);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: { email, password },
      });
      console.log("User logged in:", data.loginUser);
      // Optionally, you can handle successful login here (e.g., redirect user).
    } catch (error) {
      console.error("Error logging in:", error);
      // Optionally, you can handle login errors here (e.g., display an error message).
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
          Sign In
        </Typography>
        <div className="w-full flex flex-col gap-2">
          <Input size="large" placeholder="E-mail" prefix={<MailOutlined />} />
          <Input
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
          />

          <Button
            type="primary"
            size={"large"}
            className="bg-blue-500"
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </div>
        <div className="flex items-center">
          <p>Already have an account.</p>
          <Link className="text-blue-700 cursor-pointer" to={"/register"}>
            Sign Up
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
    </div>
  );
};

export default Login;