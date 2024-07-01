// import './App.css'
import Map2 from "./pages/Map2";
import Ressource from "./components/Ressource/Ressource";
import "./App2.css";

function App() {
  // let myScreenOrientation = window.screen.orientation;
  // myScreenOrientation.lock('landscape');

  return (
    <>
      <div className="title-app-container"></div>
      <Ressource />
      <Map2 />
    </>
  );
}

export default App;
