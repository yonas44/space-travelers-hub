import { Route, Routes } from 'react-router';
import ProfilePage from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
      <Navbar />
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
