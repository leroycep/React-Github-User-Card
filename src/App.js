import React from "react";
import User from "./components/User";
import "cirrus-ui/dist/cirrus.css";

class App extends React.Component {
  state = {
    username: "leroycep",
    info: {},
    followers: []
  };

  render() {
    return (
      <div className="content">
        <User username={this.state.username} />
      </div>
    );
  }
}

export default App;
