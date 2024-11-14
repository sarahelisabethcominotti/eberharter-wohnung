import Navigation from "./components/Navigation";
import "./index.css";
import Contacts from "./components/Contacts";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Location from "./components/Location";

function App() {
  return (
    <div className="App">
      <main>
        <Navigation />
        <Welcome />
        <Gallery />
        <Services />
        <Location />
        <Contacts />
      </main>
    </div>
  );
}

export default App;
