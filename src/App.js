import React from "react";
import axios from "axios";

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
      .then(res => {
        console.log(res.data);
        this.setState({ info: res.data });
      })
      .catch(e => console.log("Failed to retrieve user information", e));

    // Get user's followers
    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        console.log(res.data);
        this.setState({ followers: res.data });
      })
      .catch(e => console.log("Failed to retrieve user information", e));
  }

  render() {
    return (
      <div>
        <h3>{this.state.info.name}</h3>
        <div>{JSON.stringify(this.state.info)}</div>
        <div>{JSON.stringify(this.state.followers)}</div>
      </div>
    );
  }
}

export default App;
