import "./App.css";
import { User } from "./components/User";

function App() {
  const users = [
    { name: "Jordan", age: 24 },
    { name: "LeBron", age: 23 },
    { name: "Carl", age: 45 },
  ];

  return (
    <div className="App">
      {users.map((user, key) => {
        return (
          <div>
            <User name= {user.name} age= {user.age}/>   
          </div>
        );
      })}
    </div>
  );
}

// Instead of doing this, i.e. creating components here only, we can create a components folder and create components there and import them here 

// const User = (props) => {
//   return (
//     <div>
//       {props.name} {props.age}
//     </div>
//   );
// };

export default App;
