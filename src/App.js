import { Route, Routes } from 'react-router';
import ProfilePage from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
