import { BookOpen, List, Plus } from "lucide-react";
import styles from "./DashBoard.module.css";
import ProgressPieChart from "./ProgressPieChart";
import AddLearningItemForm from "./AddLearningItemForm";
import SearchAndFilter from "./SearchAndFilter";
import DisplayLearningItems from "./DisplayLearningItems";
import Button from "./ui/Button";
import { useApplicationContext } from "../contexts/ApplicationContext";

function DashBoard() {
  const {
    items,
    filteredItems,
    addItem,
    toggleStatus,
    deleteItem,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    showAddForm,
    setShowAddForm,
  } = useApplicationContext();
  return (
    <div className={styles.dashboard}>
      <div className={styles.leftColumn}>
        <div className={styles.stickyContent}>
          <ProgressPieChart items={items} />

          <div className={styles.quickAddSection}>
            {!showAddForm ? (
              <Button
                onClick={() => setShowAddForm(true)}
                className={styles.addButton}
                btnType="primary"
              >
                <Plus className={styles.buttonIcon} />
                Add New Learning Item
              </Button>
            ) : (
              <div className={styles.addFormContainer}>
                <AddLearningItemForm onAdd={addItem} />
                <div className={styles.addFormActions}>
                  <Button
                    onClick={() => setShowAddForm(false)}
                    className={styles.cancelButton}
                    btnType="outline"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.rightColumn}>
        {/* Header & Search */}
        <div className={styles.itemsHeader}>
          <div className={styles.itemsHeaderContent}>
            <div className={styles.itemsHeaderIcon}>
              <List className={styles.icon} />
            </div>
            <div>
              <h2 className={styles.itemsTitle}>Learning Items</h2>
              <p className={styles.itemsCount}>
                {filteredItems.length} of {items.length} items
              </p>
            </div>
          </div>
        </div>

        <SearchAndFilter
          onSearch={setSearchQuery}
          onFilterCategory={setSelectedCategory}
          onFilterStatus={setSelectedStatus}
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          searchQuery={searchQuery}
        />

        {/* Items Grid */}
        {filteredItems.length === 0 ? (
          <div className={styles.emptyState}>
            <BookOpen className={styles.emptyIcon} />
            <h3 className={styles.emptyTitle}>
              {items.length === 0
                ? "No learning items yet"
                : "No items match your filters"}
            </h3>
            <p className={styles.emptyText}>
              {items.length === 0
                ? "Start your learning journey by adding your first learning item."
                : "Try adjusting your search or filter criteria to find what you're looking for."}
            </p>
            {items.length === 0 && (
              <Button
                onClick={() => setShowAddForm(true)}
                className={styles.emptyButton}
                btnType="primary"
              >
                <Plus className={styles.buttonIcon} />
                Add Your First Item
              </Button>
            )}
          </div>
        ) : (
          <div className={styles.itemsGrid}>
            {filteredItems.map((item) => (
              <DisplayLearningItems
                key={item.id}
                item={item}
                onStatusToggle={toggleStatus}
                onDelete={deleteItem}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ); // DashBoard End
}

export default DashBoard;
