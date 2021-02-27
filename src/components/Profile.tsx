import React from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export const Profile = () => {
  const { level } = React.useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="/icons/catuser.png" alt="Foto do Perfil" />
      <div>
        <strong>Usuário</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </div>
  );
};
