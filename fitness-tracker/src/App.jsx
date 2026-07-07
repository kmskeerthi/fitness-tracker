import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [steps, setSteps] = useState(() => {
  return Number(localStorage.getItem("steps")) || 0;
});

const [water, setWater] = useState(() => {
  return Number(localStorage.getItem("water")) || 0;
});

const [calories, setCalories] = useState(() => {
  return Number(localStorage.getItem("calories")) || 0;
});
useEffect(() => {
  localStorage.setItem("steps", steps);
}, [steps]);

useEffect(() => {
  localStorage.setItem("water", water);
}, [water]);

useEffect(() => {
  localStorage.setItem("calories", calories);
}, [calories]);
  return (
    <div className="container">
      <h1>Fitness Tracker</h1>

      <div className="card">

  <div className="dashboard-header">
    <h2>Dashboard</h2>

    <button
      className="reset-btn"
      onClick={() => {
        setSteps(0);
        setWater(0);
        setCalories(0);
        localStorage.clear();
      }}
    >
      Reset All
    </button>
  </div>

          <div className="stats">
          <div className="box">
          <h3>Steps</h3>
          <p>{steps}</p>
          <button onClick={() => setSteps(steps + 1000)}>
          +1000
          </button>
          </div>

          <div className="box">
          <h3>Water</h3>
          <p>{water} Glasses</p>
          <button onClick={() => setWater(water + 1)}>
         +1 Glass
         </button>
         </div>

          <div className="box">
  <h3>Calories</h3>
  <p>{calories} kcal</p>
  <button onClick={() => setCalories(calories + 100)}>
    +100 kcal
  </button>
</div>
        </div>
      </div>
    </div>
  );
}

export default App;