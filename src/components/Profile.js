import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const missions = useSelector((state) => state.missions.allMissions);
  const rockets = useSelector((state) => state.rockets.allRockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-wrapper">
      <div className="mission-section">
        <h3 className="rockets">My Missions</h3>
        <table className="profile-table">
          <tbody>
            {
            reservedMissions.length > 0 ? (
              reservedMissions.map((mission) => (
                <tr key={mission.mission_id}>
                  <td className="no-rockets">{mission.mission_name}</td>
                </tr>
              ))
            ) : (
              <p className="no-rockets">No missions</p>
            )
           }
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="rockets">My Rockets</h3>
        <table className="rocket-table">
          <tbody>
            {
              reservedRockets.length > 0 ? (
                reservedRockets.map((rocket) => (
                  <tr key={rocket.id}>
                    <td className="no-rockets">{rocket.rocket_name}</td>
                  </tr>
                ))
              ) : (
                <p className="no-rockets">No reservations</p>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfilePage;
