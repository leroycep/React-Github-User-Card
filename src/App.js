import React from "react";
import axios from "axios";
import User from "./components/User";
import Follower from "./components/Follower";

class App extends React.Component {
  state = {
    username: "leroycep",
    info: {},
    followers: []
  };

  componentDidMount() {
    // Get user information
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(res => this.setState({ info: res.data }))
      .catch(e => console.log("Failed to retrieve user information", e));

    // Get user's followers
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(e => console.log("Failed to retrieve user information", e));
  }

  render() {
    return (
      <div>
        <div>
          <User user={this.state.info} />
          {this.state.followers.map(follower => (
            <Follower follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
