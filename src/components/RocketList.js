import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocket';
import Rocket from './Rocket';

const RocketList = () => {
  const rockets = useSelector((state) => state.rockets.allRockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);
  console.log(rockets);
  return (
    <div className="main-container">
      {rockets.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} />
      ))}
    </div>
  );
};

export default RocketList;
