import { Route, Routes } from 'react-router-dom';
import './App.css';
//import { Login } from 'components/Navbar/components/Login';
import { Register } from 'components/Navbar/components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
