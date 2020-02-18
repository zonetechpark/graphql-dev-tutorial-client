import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const allUserQuery = gql`
  query getUsers {
    users {
      id
      age
      name
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
                <li key={user.id}>{user.name}</li>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
