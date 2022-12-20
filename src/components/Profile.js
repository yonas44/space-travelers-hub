import React from 'react';
import './styles/Profile.css';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const missions = useSelector((state) => state.missions.allMissions);
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className="profile-wrapper">
      <div className="mission-section">
        <h3>My Missions</h3>
        <table className="profile-table">
          <tbody>
            {reservedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
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
