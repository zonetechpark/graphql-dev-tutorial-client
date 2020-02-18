import React from "react";
import { gql } from "apollo-boost";

const allUserQuery = gql`
  query getUsers {
    users {
      id
      name
      age
    }
  }
`;

function App() {
  return (
    <div className='App'>
      <h2>Test</h2>
    </div>
  );
}

export default App;
