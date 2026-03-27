import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm';
import './App.css'
import { useState } from "react";

function App() {

  /* Initializes tasks state with a default array of task objects including new description field */
   const [tasks, setTasks] = useState(
    [
        { id: 1, name: "Eat a salad", description: "Fuel up with something green and crunchy — your body will thank you later"},
        { id: 2, name: "Go for a walk", description: "Get your steps in and clear your head — bonus points for sunshine" },
        { id: 3, name: "Take your supplements", description: "Give your body the backup it needs to keep firing on all cylinders" },
        { id: 4, name: "Get a good night of sleep", description: "Recharge like a pro — tomorrow’s energy starts tonight" },
        { id: 5, name: "Consume enough lean protein", description: "Build strength and stay full — protein is your quiet MVP" }
      ]
    );

  /* Creates a new task from form input, adds it to a new array with existing tasks, and updates the tasks state */
  function addTask(Tname, Tdescription){
    const newTask = {id:tasks.length + 1, name: Tname, description: Tdescription};
    const newArray = [...tasks, newTask];
    setTasks(newArray);
  }


  function getRandomTask(){
    const index = Math.floor(Math.random() * tasks.length);
    return (
        tasks[index]
    );
  }

  function handleAlert(){
    {alert("Here is an alert message!")}; 
  }


  return (
    <div>
      <Greeting username="Alice" />
      {/* <Greeting username="Bob" />  Midterm Task 1 shows 1 greeting. This call disabled for midterm */}

      <Counter />

      <UserInfo handleClick={handleAlert} />
      
      <TaskComponent tasks={tasks} />


      <TaskForm addTask={addTask} />

    </div>
  );
}

export default App
