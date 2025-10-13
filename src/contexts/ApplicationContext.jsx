import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const STORAGE_KEY = "learning-tracker-items";

const ApplicationContext = createContext();

function ApplicationContextProvider({ children }) {
  const [items, setItems] = useLocalStorage(STORAGE_KEY, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addItems = (formData) => {
    const newItem = {
      ...formData,
      id: crypto.randomUUID(),
      dateAdded: new Date().toISOString(),
    };

    setItems((prev) => [...prev, newItem]);
    setShowAddForm(false);
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

  return (
    <ApplicationContext.Provider
      value={{
        items,
        setItems,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedStatus,
        setSelectedStatus,
        showAddForm,
        setShowAddForm,
        addItems,
        toggleStatus,
        deleteItem,
        filteredItems,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

function useApplicationContext() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error(
      "useApplicationContext must be used within an ApplicationContextProvider"
    );
  }
  return context;
}
export { ApplicationContextProvider, useApplicationContext };
