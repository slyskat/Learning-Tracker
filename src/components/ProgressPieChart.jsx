import { BookOpen, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styles from "./ProgressPieChart.module.css";
import { useApplicationContext } from "../contexts/ApplicationContext";

function ProgressPieChart() {
  const { items } = useApplicationContext();
  const completedItems = items.filter((item) => item.status === "Completed");
  const inProgressItems = items.filter((item) => item.status === "In Progress");

  const completionRate =
    items.length > 0
      ? Math.round((completedItems.length / items.length) * 100)
      : 0;
  const chartData = [
    {
      name: "Completed",
      value: completedItems.length,
      color: "#10b981",
    },
    {
      name: "In Progress",
      value: inProgressItems.length,
      color: "#f59e0b",
    },
  ];

  if (items.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.emptyContent}>
          <div className={styles.emptyState}>
            <BookOpen className={styles.emptyIcon} />
            <p className={styles.emptyText}>
              Add learning items to see your progress
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.progressHeader}>
          <div className={styles.title}>
            <TrendingUp className={styles.titleIcon} />
            Progress Overview
          </div>
        </div>

        <div className={styles.progressContent}>
          <div className={styles.content}>
            <div className={styles.completionRate}>
              <div className={styles.completionRateValue}>
                {completionRate}%
              </div>
              <p className={styles.completionRateLabel}>Completion Rate</p>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>{items.length}</div>
                <p className={styles.statLabel}>Total </p>
              </div>

              <div className={`${styles.statItem} ${styles.completedStat}`}>
                <div className={styles.statValueWithIcon}>
                  <CheckCircle className={styles.statIcon} />
                  {completedItems.length}
                </div>
                <p className={styles.statLabel}>Done</p>
              </div>

              <div className={`${styles.statItem} ${styles.inProgressStat}`}>
                <div className={styles.statValueWithIcon}>
                  <Clock className={styles.statIcon} />
                  {inProgressItems.length}
                </div>
                <p className={styles.statLabel}>Active</p>
              </div>
            </div>

            <div className={styles.chartContainer}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#888"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}% `}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressPieChart;
