import { ChallengesContext } from "../contexts/ChallengeContext";
import React from "react";

import styles from "../styles/components/CompletedChallenges.module.css";

export const CompletedChallenges = () => {
  const { challengesCompleted } = React.useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};
