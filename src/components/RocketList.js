import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocket';
import Rocket from './Rocket';

const RocketList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets);
  return (
    <div className="main-container">
      {rockets.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};

export default RocketList;
