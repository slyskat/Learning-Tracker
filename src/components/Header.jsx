import { BookOpen } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <BookOpen className={styles.icon} />
        </div>
        <h1 className={styles.title}>Learning Tracker</h1>
      </div>
      <p className={styles.subtitle}>
        Track your learning journey, manage your progress, and stay motivated as
        you acquire new skills and knowledge.
      </p>
    </header>
  );
}

export default Header;
