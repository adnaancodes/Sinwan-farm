import "./App.css";
import Navbar from "./Organism/Navbar";
import Footer from "./Organism/Footer";
import Slide1 from "./Organism/Slide1";
import Slide2 from "./Organism/Slide2";
import Slide3 from "./Organism/Slide3";
import Slide4 from "./Organism/Slide4";
import Slide5 from "./Organism/Slide5";
import Slide6 from "./Organism/Slide6";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 />
      <Footer />
    </div>
  );
}

export default App;
