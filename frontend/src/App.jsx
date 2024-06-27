// import './App.css'

import { Outlet } from "react-router-dom";
import "./App2.css";

function App() {
  // let myScreenOrientation = window.screen.orientation;
  // myScreenOrientation.lock('landscape');

  return (
    <>
      <div className="title-app-container">
        <h1 className="title-app">ROME ANTIQUE</h1>
      </div>
      <Outlet />
    </>
  );
}

export default App;
