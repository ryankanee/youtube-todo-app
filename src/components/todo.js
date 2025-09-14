import { useState } from "react";

function Todo() {
  const [allTasks, setAllTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = task;
    setAllTasks([...allTasks, newTask]);
    setTask("");
  };

  return (
    <>
      <h1>EPIC TODO APP!</h1>
      <form type="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>

      <ol>
        {allTasks.map((tasks, index) => (
          <li key={index}>{tasks}</li>
        ))}
      </ol>
    </>
  );
}

export default Todo;
