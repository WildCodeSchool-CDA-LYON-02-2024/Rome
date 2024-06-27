// import './App.css'

import Map2 from "./pages/Map2";
import { Outlet } from 'react-router-dom';
import './App2.css'




function App() {

  // let myScreenOrientation = window.screen.orientation;
  // myScreenOrientation.lock('landscape');

  return (
    <>
      <Outlet/>
      <div className="title-app-container">
        <h1 className='title-app'>ROME ANTIQUE</h1>
      </div>

      <Map2 />
     
    </>
  );
}

export default App;
