import React from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";

const ALL_USERS_QUERY = gql`
  query getUsers {
    users {
      id
      age
      name
    }
  }
`;

const CREATE_USER_MUTATION = gql`
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
      <Query query={ALL_USERS_QUERY}>
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
        mutation={CREATE_USER_MUTATION}
        variables={{ name: "Olawale", age: 22 }}
      >
        {() => <button onClick={"do something"}>Submit</button>}
      </Mutation>
    </div>
  );
}

export default App;
