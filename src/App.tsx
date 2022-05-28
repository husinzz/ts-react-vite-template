import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Typescript + TailwindCSS!</p>
        <p className="text-red-500">This is a starter template by husinzz</p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer">
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://github.com/husinzz/ts-react-vite-tailwind-template"
            target="_blank"
            rel="noopener noreferrer">
            Template repository
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
