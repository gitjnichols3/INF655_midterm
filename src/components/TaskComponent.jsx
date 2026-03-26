import { useState } from 'react';

function TaskComponent(props){


const [input, setInput] = useState("");

const [sort, setSort] = useState(false);

const filteredTasks = props.tasks.filter(task =>
  task.name.toLowerCase().includes(input.toLowerCase())
);

const displayedTasks = sort
  ? [...filteredTasks].sort((a, b) => a.name.localeCompare(b.name))
  : filteredTasks;

      return (
        <>
        <h3>Search:  
          <input type="text" placeholder="Search tasks..." value={input} onChange={e => setInput(e.target.value)}></input>
        </h3>
        <ul>
          {displayedTasks.map(task => (
            <li key={task.id}>
              {task.name}
            </li>
          ))}
        </ul>
         <button onClick={() => setSort(!sort)}>{sort ? "Show Original Order" : "Sort by Name"}</button>
        </>
  );
}

export default TaskComponent;