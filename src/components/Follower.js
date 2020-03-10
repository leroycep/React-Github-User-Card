import React from "react";

export default function Follower(props) {
  return <img src={props.follower.avatar_url} alt={props.follower.login} />;
}
