import "./App.css";
import Search from "./Search";

function App() {
    let weatherData = {
    city: "Helsinki",
    date: "Friday 15:30",
    temperature: "9",
    description: "Cloudy",
    humidity: "70%",
    wind: "2 km/h",
    icon: "🌥️",
  };
  return (
    <div className="Weather">
      <header>
        <Search />
      </header>
      <main>
        <div className="weather-data">
          <div>
            <h1 className="weather-city" id="weather-city">
              {weatherData.city}
            </h1>
            <p className="weather-details">
              <span id="time">{weatherData.date}</span>,{" "}
              <span id="description">{weatherData.description}</span>
              <br />
              Humidity: <strong id="humidity">{weatherData.humidity}</strong>,
              Wind:
              <strong id="wind-speed">{weatherData.wind}</strong>
            </p>
          </div>
          <div className="weather-temp-data">
            <div id="icon" className="weather-icon">
              {weatherData.icon}
            </div>
            <div className="weather-temperature" id="temperature">
              {weatherData.temperature}
            </div>
            <div className="temperature-unit">°C</div>
          </div>
        </div>
      </main>
      <footer>
        This app was coded by{"\t"}
        <a
          href="https://github.com/milano5naranja"
          rel="noreferrer"
          target="_blank"
        >
          Jenni Salmi
        </a>
        {"\t"}
        and it is open sourced on{"\t"}
        <a
          href="https://github.com/milano5naranja/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          {"\t"}
          Github{"\t"}
        </a>
        and hosted on{"\t"}
        <a
          href="curious-syrniki-c5ac43"
          rel="noreferrer"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}


export default App;
