import React from "react";
import User from "./components/User";
import "cirrus-ui/dist/cirrus.css";

class App extends React.Component {
  state = {
    users: ["leroycep"]
  };

  addUser = username => {
    if (!this.state.users.includes(username)) {
      this.setState({ users: [...this.state.users, username] });
    }
  };

  render() {
    return (
      <div className="content">
        {this.state.users.map((user, idx) => (
          <User key={idx} username={user} addUser={this.addUser} />
        ))}
      </div>
    );
  }
}

export default App;
