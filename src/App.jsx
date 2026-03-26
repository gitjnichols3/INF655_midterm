import Greeting from './components/Greeting';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm';
import './App.css'

function App() {


  const tasks = [
    { id: 1, name: "Eat a salad"},
    { id: 2, name: "Go for a walk" },
    { id: 3, name: "Take your supplements" },
    { id: 4, name: "Get a good night of sleep" },
    { id: 5, name: "Consume enough lean protein" }
  ];





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
      
      <TaskComponent task={getRandomTask()} />

      <ul>
        { 
          tasks.map(task => (
            <li key={task.id}> {task.name}</li>
          ))
          }
      </ul>
      <TaskForm />
    </div>
  );
}

export default App
