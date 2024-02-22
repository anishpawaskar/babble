import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Navbar/components/Login';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
