import {useState} from "react";

export default function ToDo() {
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
        setTasks([
            ...tasks,
            newTask
        ]);
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
        <div className="absolute bottom-0 right-5 bg-slate-500 bg-opacity-70 w-60">
          <button className="underline-offset-1 text-white text-xl" onClick={toggleDropdown}>Tasks To Do</button>
            {showDropdown && (
              <div>
                <form onSubmit={addTask}>
                  <input className="my-1 bg-white opacity-70 rounded-none" type="text" value={newTask} onChange={handleNewTask}/>
                  <button className="submitButton text-white" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-125 hover:drop-shadow-lg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </button>
                </form>

                <ul className="flex flex-col w-6/8"> {
                  tasks.map((task, index) => (
                    <li className="my-1 text-blue-300 pr-10 border-y-2 border-blue-300 mb-2" key={index}>
                      {editTask === index ? (
                        <form onSubmit={(event) => handleEdit(index, event.target.newValue.value)}>
                          <input type="text" defaultValue={task} name="newValue"/>
                          <button className="" type="submit"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-125 hover:stroke-amber-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          </button>
                          
                          <button type="button"onClick={handleCancel}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-125 hover:stroke-orange-700">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </form>
                        ) : (
                        <div className=" bg-cyan-900 group/item flex flex-row justify-between">
                          <p className="pl-5 text-left truncate hover:text-clip"> {task} </p>
                          <div className="flex flex-row">
                            <button className="mx-1 group/edit invisible group-hover/item:visible justify-self-end  basis-1/5 " type="button" onClick={() => setEditTask(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:scale-125 hover:stroke-amber-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
                            </svg>
                            </button>
                            <button className="mx-2 group/edit invisible group-hover/item:visible justify-self-end p-1 basis-1/5" type="button" onClick={() => handleDelete(index)}>
                              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hover:stroke-orange-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                        )
                      }
                    </li>
                   ))}
                </ul>
              </div>
            )}
          </div>
        );
}
