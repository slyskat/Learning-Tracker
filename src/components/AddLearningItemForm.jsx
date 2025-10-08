import { useState } from "react";

function AddLearningItemForm({ onAdd }) {
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

    onAdd({
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Learning Topic</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          placeholder="e.g., React Context API"
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div>
        <label htmlFor="resourceLink">Resource Link (Optional)</label>
        <input
          type="url"
          id="resourceLink"
          value={resourceLink}
          onChange={(e) => setResourceLink(e.target.value)}
          placeholder="https://example.com/resource"
        />
      </div>

      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddLearningItemForm;
