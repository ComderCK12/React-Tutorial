import "./App.css";
// import { User } from "./components/User";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Adding task
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,    // Taking the id of last element for new task
      taskName: newTask,
      completed: false,
    }
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);
  };

  //Delete Task
  const deleteTask = (id) => {
    // Method 1
    // const newTodoList = todoList.filter((task) => {
    //   if(task === taskName) {
    //     return false;
    //   }
    //   else {
    //     return true;
    //   }
    // });

    // Method 2
    // const newTodoList = todoList.filter((task) => task !== taskName);
    // setTodoList(newTodoList);

    //Method 3
    setTodoList(todoList.filter((task) => task.id !== id)); 

  }

  // Update
  const updateTask = (id) => {
    setTodoList(
      todoList.map((task) => {
          if(task.id === id) {
            return {...task, completed: true};
          }
          else {
            return task;
          }
      })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div>
              {task.completed === true ? <h1> {task.taskName} DONE ! </h1> : <h3> {task.taskName} </h3>}
              {/* <h1> {task.completed} </h1> */}
              <button onClick={() => updateTask(task.id)}>Completed</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
              <h1>------------------------------------------</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
