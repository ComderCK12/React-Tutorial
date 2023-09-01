import './App.css';

function App() {
  return (
    <div className="App">
      <Job name="Chirag" age={21} email="chirag@email.com" />
      <Job name="Pratham" age={21} email="pratham@email.com" />
      <Job name="rushil" age={21} email="rushil@email.com" />
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

export default App;
