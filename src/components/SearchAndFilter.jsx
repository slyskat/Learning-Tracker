import { Funnel, Search, X } from "lucide-react";
import { useState } from "react";

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

function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedStatus,
  setSelectedStatus,
}) {
  const [isFilterClicked, setIsFilterClicked] = useState(false);

  const isActiveFilters = selectedCategory || selectedStatus;

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedStatus(null);
  };

  return (
    <div>
      <div>
        <Search />
        <input
          type="text"
          placeholder="Seach learning items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => setIsFilterClicked(!isFilterClicked)}>
          <Funnel />
        </button>
      </div>

      {isFilterClicked && (
        <div>
          <div>
            <h3>Filters</h3>
            {isActiveFilters && (
              <button onClick={clearAllFilters}>
                <X />
                Clear All
              </button>
            )}
          </div>

          <div>
            <div>
              <label>Category</label>
              <select
                value={selectedCategory || "all"}
                onChange={(e) =>
                  setSelectedCategory(
                    e.target.value === "all" ? null : e.target.value
                  )
                }
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Status</label>
              <select
                value={selectedStatus || "all"}
                onChange={(e) =>
                  setSelectedStatus(
                    e.target.value === "all" ? null : e.target.value
                  )
                }
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
