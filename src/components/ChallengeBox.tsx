import styles from "../styles/components/ChallengeBox.module.css";

export const ChallengeBox = () => {
  return (
    <div className={styles.challengeBoxContainer}>
      <div className={styles.challengeBoxActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up" />
          Avance de level completando desafios
        </p>
      </div>
    </div>
  );
};
