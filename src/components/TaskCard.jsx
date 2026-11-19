function TaskCard({
  id,
  title,
  description,
  priority,
  status,
  deleteTask,
  completeTask,
}) {
  return (
    <div className="task-card">
      <h3>{title}</h3>

      <p>{description}</p>

      <p>
        <strong>Priority:</strong> {priority}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={status === "Completed" ? "completed" : "pending"}>
          {status}
        </span>
      </p>

      {status === "Pending" && (
        <button onClick={() => completeTask(id)}>Mark Complete</button>
      )}

      <button className="delete-btn" onClick={() => deleteTask(id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskCard;
