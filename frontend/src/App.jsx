
import './App2.css';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';


function App() {
  // let myScreenOrientation = window.screen.orientation;
  // myScreenOrientation.lock('landscape');

  const { isLoggedIn } = useAuth();

  return (
    <>
      <div className='title-app-container'>
        {isLoggedIn ? <Outlet /> : <Navigate to={'/user/login'} />}
      </div>
    </>
  );
}

export default App;
