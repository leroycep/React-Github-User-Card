import React from "react";

export default function Follower(props) {
  return (
    <div>
      <img src={props.follower.avatar_url} />
      <h4>{props.follower.login}</h4>
    </div>
  );
}
