import { Route, Routes } from 'react-router-dom';
import ProfilePage from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navbar />} exact path="/">
          <Route element={<ProfilePage />} path="/profile" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
