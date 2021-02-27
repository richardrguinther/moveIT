import React from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/LevelUpModal.module.css";

export const LevelUpModal = () => {
  const { level, closeLevelUpModal } = React.useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button onClick={closeLevelUpModal} type="button">
          <img src="/icons/close.svg" alt="Fechar Modal" />
        </button>
      </div>
    </div>
  );
};
