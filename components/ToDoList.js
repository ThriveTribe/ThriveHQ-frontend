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
            <button className="submitButton text-white" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 22" stroke-width="1.5" stroke="red" class="w-10 h-5">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
            </button>
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
                  <div className="pr-5 bg-slate-500">
                    <p >
                      {task}
                      <button className="editButton bg-red-400 justify-items-end place-items-end" type="button" onClick={() => setEditTask(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                          <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                          <line x1="16" y1="5" x2="19" y2="8" />
                        </svg>
                      </button>
                      <button className="deleteButton p-1 hover:bg-red-600" type="button" onClick={() => handleDelete(index)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                        </svg>
                      </button>
                    </p>
                    
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
