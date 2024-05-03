
import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      
        <button class="btn" >Hello</button>

        <footer>
          This project was coded by {" "}
          <a href="https://github.com/milano5naranja"
          target="_blank">
            Jenni Salmi
          </a>{" "}
          and is{" "}
          <a href="https://github.com/milano5naranja/weather-react"
          target="_blank"
          >
            open-sourced in GitHub
          </a>
        </footer>
        </div>
    </div>
        );
      }
       

export default App;