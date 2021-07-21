import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Orlando" />
        <p className="text-center">
          <a
            href="https://github.com/Mcruz92/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code;
          </a>
          by Michele Ashley Cruz
        </p>
      </div>
    </div>
  );
}
