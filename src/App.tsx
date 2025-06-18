import "./App.css";
import BioCard from "./components/BioCard";
import ImageTextCard from "./components/ImageCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BioCard />
      </header>
      <div className="App-body">
        <ImageTextCard title="Carrefour 360" link="https://drone360.jflarouche.ca/" imageUrl="./Drone.png" color="#cfcfcf" />
        <ImageTextCard title="Coming soon..." link="" imageUrl="./stopwatch.png" color="#ffffff" />
      </div>
      <footer className="App-footer">
        <p>© 2025 JF Larouche Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
