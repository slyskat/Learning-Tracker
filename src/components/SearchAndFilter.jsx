import { Funnel, Search, X } from "lucide-react";
import { useState } from "react";

import styles from "./SearchAndFilter.module.css";
import Button from "./ui/Button";
import { useApplicationContext } from "../contexts/ApplicationContext";

const categories = [
  "Frontend",
  "Backend",
  "Tools",
  "Design",
  "Mobile",
  "DevOps",
  "Database",
  "Other",
];
const statuses = ["In Progress", "Completed"];

function SearchAndFilter() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    selectedStatus,
    setSelectedCategory,
    setSelectedStatus,
  } = useApplicationContext();
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const isActiveFilters = selectedCategory || selectedStatus;

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedStatus(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <Search className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Seach learning items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <Button
          size="small"
          btnType="secondary"
          onClick={() => setIsFilterClicked(!isFilterClicked)}
          className={`${styles.filterButton} ${
            isActiveFilters ? styles.filterButtonActive : ""
          }`}
        >
          <Funnel className={styles.filterIcon} />
        </Button>
      </div>

      {isFilterClicked && (
        <div className={styles.filtersPanel}>
          <div className={styles.filterHeader}>
            <h3 className={styles.filterTitle}>Filters</h3>
            {isActiveFilters && (
              <Button
                size="small"
                btnType="secondary "
                onClick={clearAllFilters}
                className={styles.clearButton}
              >
                <X className={styles.clearIcon} />
                Clear All
              </Button>
            )}
          </div>

          <div className={styles.filterControls}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Category</label>
              <select
                value={selectedCategory || "all"}
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value === "all" ? null : e.target.value
                  )
                }
                className={styles.selectFilter}
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Status</label>
              <select
                value={selectedStatus || "all"}
                onChange={(e) =>
                  setSelectedStatus(
                    e.target.value === "all" ? null : e.target.value
                  )
                }
                className={styles.selectFilter}
              >
                <option value="all">All Statuses</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchAndFilter;
