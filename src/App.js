
import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="New York"/>

        <footer>
          This project was coded by {" "}
          <a href="https://github.com/milano5naranja"
          target="_blank"
          rel="noopener noreferrer">
            Jenni Salmi
          </a>{" "}
          and is{" "}
          <a href="https://github.com/milano5naranja/weather-react"
          target="_blank"
          rel="noopener noreferrer" 
          >
            open-sourced in GitHub
          </a> {" "}
          and {" "}
          <a
          href="https://curious-syrniki-c5ac43.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          >
            hosted on netlify
            </a>
          </footer>
        </div>
      </div>
        );
      }
       

