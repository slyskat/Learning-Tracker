import { CheckCircle, Clock, ExternalLink, Trash2 } from "lucide-react";
import styles from "./DisplayLearningItems.module.css";
import Button from "./ui/Button";

function DisplayLearningItems({ item, onStatusToggle, onDelete }) {
  const isCompleted = item.status === "Completed";
  const formatDate = (dateIsoString) => {
    return new Date(dateIsoString).toLocaleDateString();
  };
  return (
    <div
      className={`${styles.container} ${isCompleted ? styles.completed : ""}`}
    >
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <h3
              className={`${styles.title} ${
                isCompleted ? styles.titleCompleted : ""
              }`}
            >
              {item.title}
            </h3>
            <div className={styles.badges}>
              <div className={styles.categoryBadge}>{item.category}</div>
              <div
                className={`${styles.statusBadge} ${
                  isCompleted ? styles.statusCompleted : styles.statusInProgress
                }`}
              >
                <div className={styles.statusContent}>
                  {isCompleted ? (
                    <CheckCircle className={styles.statusIcon} />
                  ) : (
                    <Clock className={styles.statusIcon} />
                  )}
                  {item.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.actions}>
          <div className={styles.leftActions}>
            {item.resourceLink && (
              <Button
                size="small"
                btnType="outline"
                className={styles.resourceButton}
                onClick={() => window.open(item.resourceLink, "_blank")}
              >
                <ExternalLink className={styles.actionIcon} />
                Resource
              </Button>
            )}
          </div>

          <div className={styles.rightActions}>
            <Button
              size="small"
              btnType="outline"
              className={`${styles.toggleButton} ${
                isCompleted
                  ? styles.markInProgressButton
                  : styles.markCompleteButton
              }`}
              onClick={() => onStatusToggle(item.id)}
            >
              {isCompleted ? "Mark In Progress" : "Mark Complete"}
            </Button>

            <Button
              size="small"
              btnType="outline"
              className={styles.deleteButton}
              onClick={() => onDelete(item.id)}
            >
              <Trash2 className={styles.actionIcon} />
            </Button>
          </div>
        </div>

        <div className={styles.dateAdded}>
          Added {new Date(item.dateAdded).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default DisplayLearningItems;
