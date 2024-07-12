import './App2.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='title-app-container'>
      <Outlet />
    </div>
  );
}

export default App;
