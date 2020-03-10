import React from "react";

export default function Follower(props) {
  return (
    <figure className={props.className}>
      <img src={props.follower.avatar_url} alt={props.follower.login} />
    </figure>
  );
}
