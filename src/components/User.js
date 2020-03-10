import React from "react";
import axios from "axios";
import Follower from "./Follower";

class User extends React.Component {
  state = {
    info: {},
    followers: []
  };

  componentDidMount() {
    // Get user information
    axios
      .get(`https://api.github.com/users/${this.props.username}`)
      .then(res => this.setState({ info: res.data }))
      .catch(e => console.log("Failed to retrieve user information", e));

    // Get user's followers
    axios
      .get(`https://api.github.com/users/${this.props.username}/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(e => console.log("Failed to retrieve user information", e));
  }

  render() {
    return (
      <div>
        <img src={this.state.info.avatar_url} alt={`${this.state.info.name}`} />
        <h3>{this.state.info.name}</h3>
        <p>{this.state.info.bio}</p>
        <div>
          {this.state.followers.map(follower => (
            <Follower key={follower.login} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default User;
