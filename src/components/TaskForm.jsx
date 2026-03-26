

import { useState } from "react";
 
function TaskForm() {
  const [taskName, settaskName] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); 
        console.log(taskName);
        settaskName(""); 
    }
 
  return (
    <form onSubmit={handleSubmit}>
     <label htmlFor="taskName">Enter Task Name: </label>
      <input type="text" id="taskName" value={taskName} onChange={(e) => settaskName(e.target.value)} />
      &nbsp;&nbsp;
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;