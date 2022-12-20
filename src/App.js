import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/Profile';
import MissionsPage from './components/Missions';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />} exact path="/">
          <Route element={<ProfilePage />} path="/profile" />
          <Route element={<MissionsPage />} path="/missions" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
