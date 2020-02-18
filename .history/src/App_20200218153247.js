import React from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";

const allUserQuery = gql`
  query getUsers {
    users {
      id
      age
      name
    }
  }
`;

const createUserMutation = gql`
  mutation createUser($name: String!, $age: Int) {
    createUser(data: { name: $name, age: $age }) {
      id
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
      <Mutation
        mutation={createUserMutation}
        variables={{ name: "Olawale", age: 22 }}
      >
        {() => <button onClick={"do something"}>Submit</button>}
      </Mutation>
    </div>
  );
}

export default App;
