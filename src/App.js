import Navigation from "./components/Navigation";
import Main from "./pages/Main";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      {/* <Navigation/>
      <Welcome/>
      <ContactForm/>
      <Booking/>
      <Footer/> */}
    </div>
  );
}

export default App;
