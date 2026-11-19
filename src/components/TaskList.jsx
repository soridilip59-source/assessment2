import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, completeTask }) {
  if (tasks.length === 0) {
    return <p className="empty-message">No tasks found!</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          priority={task.priority}
          status={task.status}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
