import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <About />
      <Footer />
    </div>
  );
}

export default App;
