import "./App.css";
import Sheet from "./components/sheet/sheet";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="column">
        <div className="column-name">B列</div>
        <div className="column-name">I列</div>
        <div className="column-name">N列</div>
        <div className="column-name">G列</div>
        <div className="column-name">O列</div>
      </div>
      <div className="sheet-container">
        <Sheet></Sheet>
      </div>
    </div>
  );
}

export default App;
