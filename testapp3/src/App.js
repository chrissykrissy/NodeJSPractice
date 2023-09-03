import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Test App</h1>
      <label>First Name:</label><input type="text" id="firstName"></input>
      <label>Last Name</label><input type="text" id="lastName"></input>
      <button onClick={()=> { alert(`First Name: ${document.getElementById("firstName").value}, Last Name: ${document.getElementById("lastName").value}`)}}>Pop Up</button>
    </div>
  );
}

export default App;
