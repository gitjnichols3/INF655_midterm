

import { useState } from "react";
 
function TaskForm(props) {
  /* Stores the task name, task description, and validation error */
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState("");


/* On submit - Trims input strings, displays error if fields are empty and returns, 
calls addTask function from App.jsx to add task to array in task state, clears form fields*/
    function handleSubmit(e) {
        e.preventDefault(); 
        let trimmedTaskName = taskName.trim();
        let trimmedTaskDescription = taskDescription.trim();
        if(trimmedTaskName === "" || trimmedTaskDescription === ""){
          setError("Task name and description are required");
          return;
        }
          setError("");
          props.addTask(trimmedTaskName, trimmedTaskDescription);
        
          setTaskName(""); 
          setTaskDescription(""); 
    }
 
  return (
    <form onSubmit={handleSubmit}> {/* Submits the form through handleSubmit for validation and task creation */}

    {/* taskName and taskDescription update respective states as user types */}
      <p>
        <label htmlFor="taskName">Enter Task Name: </label>
        <input type="text" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} /><br/>
      </p>
      <p>
        <label htmlFor="taskDescription">Enter Task Description: </label>
        <input type="text" id="taskDescription" value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} /><br />
      </p>
      {error}<br/>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;