// import { Link } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import Planet from '../images/planetImg.png';

const Navbar = () => {
  const x = 'Space Travelers Hub';
  return (
    <div>
      <nav className="navbar">
        <div className="header-title">
          <img alt="planet logo" src={Planet} height={50} width={50} />
          <h1 className="title">{x}</h1>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
