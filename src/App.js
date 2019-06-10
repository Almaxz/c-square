import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", minHeight: "20rem", fontSize: "1.5rem", textAlign: "left"}}>
      <div style={{ display: "inline-block", backgroundColor: "blue", width: "20%"}}>
        <h1 style={{ color: "white" }}>white on blue</h1>
      </div>
      <div style={{ display: "inline-block", backgroundColor: "red", width: "20%" }}>
        <h1 style={{ color: "blue" }}>blue on red</h1>
      </div>
      <div style={{ display: "inline-block", backgroundColor: "pink", width: "20%" }}>
        <h1 style={{ color: "green" }}>green on pink</h1>
      </div>
    </div>
  );
}

export default App;
