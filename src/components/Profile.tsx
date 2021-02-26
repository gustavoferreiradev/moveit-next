import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {

  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/19676795?s=460&v=4"
        alt="Gustavo Ferreira"
      />
      <div>
        <strong>Gustavo Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
