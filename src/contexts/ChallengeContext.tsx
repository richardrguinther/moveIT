import React, { ReactNode } from "react";
import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  experienceToNextLevel: () => number;
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const ChallengesContext = React.createContext(
  {} as ChallengesContextData
);

export const ChallengesProvider = ({ children }: ChallengeProviderProps) => {
  const [level, setLevel] = React.useState(1);
  const [currentExperience, setCurrentExperience] = React.useState(0);
  const [challengesCompleted, setChallengesCompleted] = React.useState(0);
  const [activeChallenge, setActiveChallenge] = React.useState(null);

  const experienceToNextLevel = () => Math.pow((level + 1) * 4, 2);

  const levelUp = () => setLevel(level + 1);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = randomChallengeIndex;

    setActiveChallenge(challenges[challenge]);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level: 1,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        startNewChallenge,
        levelUp,
        resetChallenge,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
