import { Route, Routes } from 'react-router-dom';
import { Login } from 'components/Navbar/components/Login';
import { Register } from 'components/Navbar/components/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
