function DisplayLearningItems({ items, onToggle, onDelete }) {
  const formatDate = (dateIsoString) => {
    return new Date(dateIsoString).toLocaleDateString();
  };
  return (
    <div>
      {items.map((item) => {
        const isCompleted = item.status === "Completed";

        return (
          <div key={item.id}>
            <div>
              <h2>{item.title}</h2>
              <p>
                <span>{item.category}</span>
                <span>{item.status}</span>
              </p>
            </div>

            <div>
              <button onClick={() => onToggle(item.id)}>
                {isCompleted ? "Mark In Progess" : "Mark Complete"}
              </button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </div>

            <span>{formatDate(item.dateAdded)}</span>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayLearningItems;
