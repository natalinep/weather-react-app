import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather />
        <p>
          This app was coded by Nataliia Neporiadkina and{" "}
          <a
            href="https://github.com/natalinep/weather-react-app"
            title="GitHub"
          >
            open-sourced in GitHub
          </a>
        </p>
      </div>
    </div>
  );
}
