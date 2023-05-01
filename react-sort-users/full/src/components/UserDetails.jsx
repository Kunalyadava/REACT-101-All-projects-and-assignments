import styles from "./userDetails.module.css";
const UserDetails = (props) => {
  const {
    avatar,
    first_name,
    last_name,
    address,
    is_following,
    karma,
    posts,
    followers,
    id
  } = props;

  return (
      <div className={`${styles.flex__box} ${styles.container}`} data-testid = "user-container">
        <img
          src={avatar}
          height="60px"
          width="60px"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <div className={styles.flex__box} >
            <h3 data-testid = 'user-fname'>{first_name}</h3>
            <h3 data-testid = 'user-lname'>{last_name}</h3>
          </div>
          <div>
            <p data-testid = 'user-address'>{address}</p>
          </div>
        </div>
        <div>
          <h3 data-testid = 'user-karma'>{karma}</h3>
          <p>Karma</p>
        </div>
        <div>
          <h3 data-testid = 'user-followers'>{followers}</h3>
          <p>Followers</p>
        </div>
        <div>
          <h3 data-testid = 'user-posts'>{posts}</h3>
          <p>Posts</p>
        </div>
        <button className={styles.btn} data-testid = 'follow-btn'>
          {is_following ? "Unfollow" : "Follow"}
        </button>
      </div>
  );
};
export default UserDetails;