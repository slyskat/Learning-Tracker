import { useState } from "react";

import styles from "./AddLearningItemForm.module.css";
import { BookOpen, Plus } from "lucide-react";
import Button from "./ui/Button";
import { useApplicationContext } from "../contexts/ApplicationContext";

function AddLearningItemForm() {
  const { addItems } = useApplicationContext();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [resourceLink, setResourceLink] = useState("");

  const categories = [
    { name: "Frontend" },
    { name: "Backend" },
    { name: "Tools" },
    { name: "Design" },
    { name: "Mobile" },
    { name: "DevOps" },
    { name: "Database" },
    { name: "Other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    addItems({
      title: title.trim(),
      category,
      status,
      resourceLink: resourceLink.trim(),
    });

    setTitle("");
    setCategory("");
    setStatus("In Progress");
    setResourceLink("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BookOpen className={styles.icon} />
        <h3 className={styles.title}>Add Learning Item</h3>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputField}>
          <label htmlFor="title">Learning Topic</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            placeholder="e.g., React Context API"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className={styles.select}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="status">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={styles.select}
            >
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <div className={styles.inputField}>
          <label htmlFor="resourceLink">Resource Link (Optional)</label>
          <input
            type="url"
            id="resourceLink"
            value={resourceLink}
            onChange={(e) => setResourceLink(e.target.value)}
            placeholder="https://example.com/resource"
            className={styles.input}
          />
        </div>

        <Button type="submit" btnType="primary" className={styles.submitButton}>
          <Plus className={styles.buttonIcon} />
          Add Item
        </Button>
      </form>
    </div>
  );
}

export default AddLearningItemForm;
