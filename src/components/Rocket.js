import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => (
  <>
    <div className="rockets">
      <img className="rocket-img" src={rocket.flickr_images[0]} height={150} width={200} alt="rocket" />
      <div className="description">
        <h1>{rocket.rocket_name}</h1>
        <p>{rocket.description}</p>
        <button className="reserve-btn" type="button">Reserve rocket</button>
      </div>
    </div>
  </>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default Rocket;
