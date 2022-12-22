import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocket';
import Rocket from './Rocket';

const RocketList = () => {
  const [loading, rockets] = useSelector((state) => state.rockets.allRockets);
  console.log('i am', loading);
  // const loading = rockets;
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
      {loading && <div className="animate" />}
      {rockets.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default RocketList;
