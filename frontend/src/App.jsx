import React from "react";
import { useQuery, gql } from "@apollo/client";
import {
  GET_ALL_COURSE,
  GET_ALL_LECTURES,
  GET_ALL_USERS,
} from "./graphql/queries.graphql";
import MainRoutes from "./routes/MainRoutes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./Redux/Auth/actionType";
import { fetchCoursesSuccess } from "./Redux/courses/actionType";
import { fetchUsersSuccess } from "./Redux/users/actionType";
import { fetchLecturesSuccess } from "./Redux/lectures/actionType";

const App = () => {
  const {
    loading: loadingCourses,
    error: errorCourses,
    data: dataCourses,
  } = useQuery(GET_ALL_COURSE);
  const {
    loading: loadingLectures,
    error: errorLectures,
    data: dataLectures,
  } = useQuery(GET_ALL_LECTURES);
  const {
    loading: loadingUsers,
    error: errorUsers,
    data: dataUsers,
  } = useQuery(GET_ALL_USERS);

  const dispatch = useDispatch();

  console.log(dataCourses?.courses);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(loginSuccess(token));
  }, [dispatch]);

  useEffect(() => {
    if (!loadingCourses) {
      dispatch(fetchCoursesSuccess(dataCourses?.courses));
    }
  }, [dispatch, loadingCourses, dataCourses]);

  useEffect(() => {
    if (!loadingLectures) {
      dispatch(fetchLecturesSuccess(dataLectures?.lectures));
    }
  }, [dispatch, loadingLectures, dataLectures]);

  useEffect(() => {
    if (!loadingUsers) {
      dispatch(fetchUsersSuccess(dataUsers?.users));
    }
  }, [dispatch, loadingUsers, dataUsers]);
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
