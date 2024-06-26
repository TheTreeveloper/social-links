import styles from "./ProfileContainer.module.css";

function ProfileContainer() {
  return (
    <div className={styles.card_container}>
      <img
        src="./assets/images/avatar-jessica.jpeg"
        alt = "profile-picture"
        className={styles.profile_image}
      />
      <h1>Jessica Randall</h1>
      <h4>London, United Kingdom</h4>
      <p>"Front-end developer and avid reader"</p>
    </div>
  );
}

export default ProfileContainer;
