import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocket';
import Rocket from './Rocket';

const RocketList = () => {
  const { loading, allRockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allRockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, allRockets.length]);

  const handleChange = (id) => {
    dispatch(reserveRocket(id));
  };

  return (
    <div data-testid="rockets" className="main-container">
      {loading && <div className="animate" />}
      {allRockets.map((rocket) => (
        <Rocket rocket={rocket} key={rocket.id} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default RocketList;
