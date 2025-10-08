import { useEffect, useState } from "react";
import AddLearningItemForm from "./components/AddLearningItemForm";
import DisplayLearningItems from "./components/DisplayLearningItems";
import SearchAndFilter from "./components/SearchAndFilter";
import ProgressPieChart from "./components/ProgressPieChart";

const STORAGE_KEY = "learning-tracker-items";

function App() {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(function () {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (storedValue) {
      try {
        setItems(JSON.parse(storedValue));
      } catch (error) {
        console.log("Error loading stored items:", error);
      }
    }
  }, []);

  useEffect(
    function () {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    },
    [items]
  );

  const addItems = (formData) => {
    const newItem = {
      ...formData,
      id: crypto.randomUUID(),
      dateAdded: new Date().toISOString(),
    };

    setItems((prev) => [...prev, newItem]);
  };

  const toggleStatus = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Completed" ? "In Progress" : "Completed",
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;

    const matchesStatus = !selectedStatus || item.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const completedItemsCount = items.filter(
    (item) => item.status === "Completed"
  ).length;
  const InProgressItemsCount = items.filter(
    (item) => item.status === "In Progress"
  ).length;

  const completionRate =
    items.length > 0 ? Math.round(completedItemsCount / items.length) * 100 : 0;

  const chartData = [
    {
      name: "Completed",
      value: completedItemsCount,
      color: "#10b981",
    },
    {
      name: "In Progress",
      value: InProgressItemsCount,
      color: "#f59e0b",
    },
  ];

  return (
    <div>
      <ProgressPieChart data={chartData} />
      <AddLearningItemForm onAdd={addItems} />
      <SearchAndFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedCategory={selectedCategory}
        setSelectedCategory={selectedCategory}
      />
      <DisplayLearningItems
        items={filteredItems}
        onToggle={toggleStatus}
        onDelete={deleteItem}
      />
    </div>
  );
}

export default App;
