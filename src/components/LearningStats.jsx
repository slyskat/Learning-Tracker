import { BarChart3, BookOpen, List } from "lucide-react";
import styles from "./LearningStats.module.css";
import { useApplicationContext } from "../contexts/ApplicationContext";

function LearningStats() {
  const { items } = useApplicationContext();
  const completedCount = items.filter(
    (item) => item.status === "Completed"
  ).length;
  const inProgressCount = items.filter(
    (item) => item.status === "In Progress"
  ).length;
  return (
    <div className={styles.learningStats}>
      <div className={styles.stat}>
        <div className={styles.content}>
          <div>
            <p className={styles.label}>Total Items</p>
            <p className={styles.value}>{items.length}</p>
          </div>
          <div className={styles.iconContainer}>
            <List className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.stat}>
        <div className={styles.content}>
          <div>
            <p className={styles.label}>Completed</p>
            <p className={`${styles.value} ${styles.completed}`}>
              {completedCount}
            </p>
          </div>
          <div className={`${styles.iconContainer} ${styles.completedIcon}`}>
            <BookOpen className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.stat}>
        <div className={styles.content}>
          <div>
            <p className={styles.label}>In Progress</p>
            <p className={`${styles.value} ${styles.inProgress}`}>
              {inProgressCount}
            </p>
          </div>
          <div className={`${styles.iconContainer} ${styles.inProgressIcon}`}>
            <BarChart3 className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningStats;
