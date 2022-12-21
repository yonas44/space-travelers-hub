import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocket';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.allRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  const handleChange = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div className="main-container">
      {rockets.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default RocketList;
