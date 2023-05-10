import { useState } from "react";

const UserCard = (props) => {
  let { name, address, avatar, posts, followers } = props;
  let [followBtn, setFollowBtn] = useState(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black"
        }}
      >
        <img src={avatar} alt={name} style={{ borderRadius: "50%" }} />
        <div style={{ margin: "1rem" }}>
          <div>
            <h2 data-testid ="user_name">{name}</h2>
            <p data-testid ="user_address">{address}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ padding: "1rem" }}>
              <h3>Posts</h3>
              <p data-testid="user_posts">{posts}</p>
            </div>
            <div style={{ padding: "1rem" }}>
              <h3>Followers</h3>
              <p data-testid ="user_followers">{followers}</p>
            </div>
          </div>
        </div>
        <div style={{ margin: "1rem" }}>
          <button
            onClick={() => setFollowBtn(!followBtn)}
            style={{
              padding: "0.5rem",
              fontWeight: followBtn ? "bold" : "",
              width: "5rem",
              borderRadius: "0.5rem"
            }}
          >
            {followBtn ? "following" : "follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;