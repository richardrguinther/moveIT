import styles from "../styles/components/Profile.module.css";

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/richardrguinther.png" alt="Foto do Perfil" />
      <div>
        <strong>Richard Guinther</strong>
        <p>
          <img src="icons/level.svg" />
          Level 1
        </p>
      </div>
    </div>
  );
};
