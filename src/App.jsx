import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Navbar/components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
