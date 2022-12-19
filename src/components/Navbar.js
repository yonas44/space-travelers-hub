// import { Link } from 'react-router-dom';
import Planet from '../images/planetImg.png';

const Navbar = () => {
  const x = 'Space Travelers Hub';
  return (
    <nav className="navbar">
      <div className="header-title">
        <img alt="planet logo" src={Planet} height={50} width={50} />
        <h1>{x}</h1>
      </div>
      <ul className="nav-links">
        <li><a className="anchor" href="/">Rockets</a></li>
        <li><a className="anchor" href="/missions">Missions</a></li>
        <li><a className="anchor" href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
