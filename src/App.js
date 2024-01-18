// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
// import SignUp from './components/signup/signup';
// import signin from './components/signin/signin';


function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
