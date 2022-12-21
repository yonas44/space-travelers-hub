import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePage from './components/Profile';
import MissionsPage from './components/Missions';
import Navbar from './components/Navbar';
import { getMissions } from './redux/missions/missions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const missions = useSelector((state) => state.missions.allMissions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) dispatch(getMissions());
  }, [dispatch, missions.length]);
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />} exact path="/">
          <Route element={<RocketList />} path="/" />
          <Route element={<MissionsPage />} path="/missions" />
          <Route element={<ProfilePage />} path="/profile" />
          <Route element={<MissionsPage />} path="/missions" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
