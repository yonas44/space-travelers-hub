// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import Planet from '../images/planetImg.png';
import Footer from './Footer';

const Navbar = () => {
  const x = 'Space Travelers Hub';
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prevProp) => !prevProp);
  };

  return (
    <div className="components-holder">
      <nav className="navbar">
        <button id="burger-menu" type="button" onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose style={{ scale: '4', color: '#fff' }} />
          ) : (
            <FiMenu style={{ scale: '3', color: '#fff' }} />
          )}
        </button>

        <div className="header-title">
          <img alt="planet logo" src={Planet} height={50} width={50} />
          <h1 className="title">{x}</h1>
        </div>
        <ul className={`${navbarOpen ? 'open nav-links' : 'nav-links'}`}>
          <li>
            <NavLink
              onClick={handleToggle}
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleToggle}
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/missions"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={handleToggle}
              className={({ isActive }) => (isActive ? 'link-active' : 'link')}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Navbar;
