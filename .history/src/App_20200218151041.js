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

function App() {
  return (
    <div className='App'>
      <Query query={allUserQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error Occurred</div>;
          const users = data.users;
          return (
            <div>
              {users.map(user => (
                <li key={user.id}>{user.email}</li>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
