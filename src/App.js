import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
