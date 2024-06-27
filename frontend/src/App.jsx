// import './App.css'
import Map2 from "./pages/Map2";

import "./App2.css";
import Ressource from "./components/Ressource/Ressource";

function App() {
  // let myScreenOrientation = window.screen.orientation;
  // myScreenOrientation.lock('landscape');

  return (
    <>

      <div className="title-app-container">
        {/* <h1 className="title-app">ROME ANTIQUE</h1> */}
        
      </div>
      <Ressource className='ressourceHome' />
      <Map2 />
    </>
  );
}

export default App;
