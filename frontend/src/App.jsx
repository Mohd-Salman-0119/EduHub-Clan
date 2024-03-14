import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_COURSE } from "./graphql/queries.graphql";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./Redux/Auth/actionType";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(loginSuccess(token));
  }, []);

  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
