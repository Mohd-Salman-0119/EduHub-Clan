import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_ALL_COURSE } from "./graphql/queries.graphql";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_COURSE);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
