import PropTypes from 'prop-types';

const Rocket = ({ rocket, handleChange }) => (
  <>
    <div className="rockets">
      <img className="rocket-img" src={rocket.flickr_images} height={150} width={200} alt="rocket" />
      <div className="description">
        <h1>{rocket.rocket_name}</h1>
        <p>
          <span className={rocket.reserved ? 'check-status' : ''}>{rocket.reserved ? 'Reserved' : ''}</span>
          {rocket.description}
        </p>
        <button
          onClick={() => handleChange(rocket.id)}
          id="reserve-btn"
          type="button"
          className={rocket.reserved ? 'reserved-button' : ''}
        >
          {rocket.reserved ? 'cancel reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  </>
);

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
    id: PropTypes.number,
    reserved: PropTypes.bool,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Rocket;
