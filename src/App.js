import "./App.css";
// import { User } from "./components/User";
import { useState } from "react";


function App() {

  // the initial state (age) set to 0, where age is a variable and setAge is a function
  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age+1);
  }

  const decreaseAge = () => {
    setAge(age-1);
  }

  return (
    <div className="App">
      <button onClick={decreaseAge}>Decrease</button>
      {age}
      <button onClick={increaseAge}>Increase</button>
    </div>
  );
}


export default App;
