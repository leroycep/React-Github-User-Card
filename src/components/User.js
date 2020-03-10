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
      <div className="frame">
        <div className="frame__header u-text-center">
          <figure class="avatar">
            <img src={this.state.info.avatar_url} alt={this.state.info.name} />
          </figure>
          <h3 className="frame__title">{this.state.info.name}</h3>
        </div>

        <div className="frame__body">
          <div className="content">{this.state.info.bio}</div>
        </div>

        <div className="frame__footer u-text-center">
          <div className="frame__subtitle">Followers</div>
          <div className="row">
            {this.state.followers.map(follower => (
              <Follower
                className="col-1"
                key={follower.login}
                follower={follower}
                addUser={this.props.addUser}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default User;
