import React from 'react';
import './styles/Profile.css';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missions';

const ProfilePage = () => {
  const missions = useSelector((state) => state.missions.allMissions);
  const reservedMissions = missions.filter((mission) => mission.reserved);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div className="profile-wrapper">
      <div className="mission-section">
        <h3>My Missions</h3>
        <table className="profile-table">
          <tbody>
            {reservedMissions.length === 0 ? (
              <tr>
                <td className="empty-mission">
                  You have not joined any mission yet!
                </td>
              </tr>
            ) : (
              reservedMissions.map((mission) => (
                <tr className="reserved-mission" key={mission.mission_id}>
                  <td>
                    <div className="joined-missions">
                      <span style={{ width: '30%' }}>
                        {mission.mission_name}
                      </span>
                      <a
                        href={mission.info}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More info...
                      </a>
                      <button
                        onClick={() => handleClick(mission.mission_id)}
                        id="profile-mission-btn"
                        type="button"
                        className={mission.reserved ? 'reserved-btn' : ''}
                      >
                        {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="rockets-section">
        <h3>My Rockets</h3>
        <table className="rocket-table">
          <tbody>
            <tr>
              <td>Falcon 9</td>
            </tr>
            <tr>
              <td>Falcon heavy</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
