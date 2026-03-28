import { useState } from 'react';

function TaskComponent(props){

/* Set up state to store the input. */
const [input, setInput] = useState("");

/* Set up state to check if sorting is active */
const [sort, setSort] = useState(false);

/*  Filters task array sent as props from App based on input. */
const filteredTasks = props.tasks.filter(task =>
  task.name.toLowerCase().includes(input.toLowerCase())
);

/* If sort state is true, uses copy of filteredTasks and alphabetizes by task name, otherwise uses unsorted filteredTasks */
const displayedTasks = sort
  ? [...filteredTasks].sort((a, b) => a.name.localeCompare(b.name))
  : filteredTasks;


  /* Confirms deletion, then calls delTask function from App.jsx to delete */
function handleDel(Tid){
  let userConfirmed = confirm("Are you sure you want to delete this item?");

  if (userConfirmed) {
    props.delTask(Tid);
  }
}

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
              <button onClick={() => handleDel(task.id)}>Delete</button> {/* Delete button added to each task */}
            </li>
          ))}
        </ul>
        {/* Button toggles sort state. Also changes button label to indicate whether sorting is active */}
         <button onClick={() => setSort(!sort)}>{sort ? "Show Original Order" : "Sort by Name"}</button>
        </>
  );
}

export default TaskComponent;