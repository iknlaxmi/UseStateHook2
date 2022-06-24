import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  // console.log(time);
  const [t, setTime] = useState(time);
  function showTime() {
    let localTime = new Date().toLocaleTimeString();
    setTime(localTime);
  }
  setInterval(showTime, 1000);
  return (
    <div className="container">
      <h1>{t}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
