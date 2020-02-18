import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { client } from "./index";

const allUserQuery = gql`
  query getUsers {
    users {
      id
      name
      age
    }
  }
`;

client
  .query({ query: allUserQuery })
  .then(res => console.log(res.data))
  .catch(err => console.log(err));

function App() {
  return <div className='App'></div>;
}

export default App;
