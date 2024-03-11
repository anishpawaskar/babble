import { Route, Routes } from 'react-router-dom';
import { Login } from 'components/Navbar/components/Login';
import { Register } from 'components/Navbar/components/Register';
import { PrivateRoute } from 'components/UtilsComponents/PrivateRoute';
import { Channels } from 'components/Channels';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/channels" element={<PrivateRoute />}>
          <Route path="/channels" element={<Channels />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
