import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/rockets/rocket';
import ProfilePage from './components/Profile';
import RocketList from './components/RocketList';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import MissionsPage from './components/Missions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRockets());
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />} exact path="/">
          <Route element={<RocketList />} path="/" />
          <Route element={<MissionsPage />} path="/missions" />
          <Route element={<ProfilePage />} path="/profile" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
