import React from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";

import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = React.useContext(
    ChallengesContext
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel()
  );

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}
        </span>
      </div>
      <span>{experienceToNextLevel()} xp</span>
    </header>
  );
};
