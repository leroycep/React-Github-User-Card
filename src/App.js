import React from "react";
import User from "./components/User";

class App extends React.Component {
  state = {
    username: "leroycep",
    info: {},
    followers: []
  };

  render() {
    return (
      <div>
        <User username={this.state.username} />
      </div>
    );
  }
}

export default App;
