import GlobalStyle from "./assets/styles/global";
import Routes from "./routes/routes";
import Navbar from "./components/navbar";
import "./app.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <div className="routes">
        <Routes />
      </div>
    </div>
  );
}

export default App;
