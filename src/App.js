import "./App.css";
// import { User } from "./components/User";
import { useState } from "react";

function App() {

  // useState
  const [inputValue, setInputValue] = useState("");

  // setting the value 
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange} />
      {inputValue}
    </div>
  );
}

export default App;
