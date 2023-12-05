import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function Todos() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  function addTask(task) {
    const newTask = [...tasks, task];
    setTasks(newTask);
  }

  function removeTask(hmwrk) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== hmwrk.id;
    });

    setTasks(updatedTasks);
  }

  function editTask(id, updatedText) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, hmwrk: updatedText };
      }
      return task;
    });

    setTasks(updatedTasks);
    setEditingTask(null);
  }

  const startEditing = (id) => {
    setEditingTask(id);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  return (
    <div className="listContainer">
      <div className="toDoContainer">
        {tasks.map((item, index) => (
          <Todo
            key={index}
            hmwrk={item}
            remove={removeTask}
            startEditing={startEditing}
            editingTask={editingTask}
            editTask={editTask}
            cancelEditing={cancelEditing}
          />
        ))}
      </div>
      <TodoForm addTask={addTask} editTask={editTask} editingTask={editingTask} />
    </div>
  );
}
