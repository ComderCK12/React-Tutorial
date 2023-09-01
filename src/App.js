import "./App.css";

function App() {
  const age = 8;
  const isGreen = true;

  // if(age >= 18) {
  //   return <h1>Above provided age</h1>
  // }
  // else {
  //   return <div className="App">Under age</div>
  // }

  return (
    <div className="App">
      {age > 18 ? <h1>Above age</h1> : <h1>Under age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>Color</h1>
    </div>
  );
}

export default App;
