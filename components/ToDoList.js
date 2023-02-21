import { useState } from "react";
import TDleft from "./TDLEFT";

export default function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }
  
  function addTask(event) {
    event.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleEdit(index, newTask) {
    const newTasks = [...tasks];
    newTasks[index] = newTask;
    setTasks(newTasks);
    setEditTask(null);
  }

  function handleDelete(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function handleCancel() {
    setEditTask(null);
  }

  return (
    <div>
      <button className="underline-offset-1 text-white text-xl bg-blue-300"  onClick={toggleDropdown}>To-do</button>
      {showDropdown && (
        <div>
          <form onSubmit={addTask}>
            <input type="text" value={newTask} onChange={handleNewTask} />
            <button className="submitButton text-white" type="submit">Add Task</button>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <li className="list text-blue-300 pr-10" key={index}>
                {editTask === index ? (
                  <form onSubmit={(event) => handleEdit(index, event.target.newValue.value)}>
                    <input type="text" defaultValue={task} name="newValue" />
                    <button className="deleteButton p-2 bg-slate-500" type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                  </form>
                ) : (
                  <div>
                    {task}
                    <button className="editButton pl-20 bg-red-400" type="button" onClick={() => setEditTask(index)}>Edit</button>
                    <button className="deleteButton p-1" type="button" onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
