import { useState } from 'react';

function TaskComponent(props){

/* Set up state to store the input. */
const [input, setInput] = useState("");

/* Set up state to check if sorting is active */
const [sort, setSort] = useState(false);

/*  Filters task array sent as props from App based on input. Saves a copy to leave original unchanged */
const filteredTasks = props.tasks.filter(task =>
  task.name.toLowerCase().includes(input.toLowerCase())
);

/* If sort state is true, uses copy of filteredTasks and alphabetizes by task name, otherwise uses unsorted filteredTasks */
const displayedTasks = sort
  ? [...filteredTasks].sort((a, b) => a.name.localeCompare(b.name))
  : filteredTasks;

      return (
        <>
        <h3>Search:  
          {/* Creates input form field and updates input state if changed */}
          <input type="text" placeholder="Search tasks..." value={input} onChange={e => setInput(e.target.value)}></input>
        </h3>
        <ul>
          {/* Maps over displayedTasks and displays as list items */}
          {displayedTasks.map(task => (
            <li key={task.id}>
              {task.name} - {task.description} {/* Added description to map when added to tasks state array in Midterm Task 4 */}
            </li>
          ))}
        </ul>
        {/* Button toggles sort state. Also changes button label to indicate whether sorting is active */}
         <button onClick={() => setSort(!sort)}>{sort ? "Show Original Order" : "Sort by Name"}</button>
        </>
  );
}

export default TaskComponent;