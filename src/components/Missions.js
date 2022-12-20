import React from 'react';
import { useSelector } from 'react-redux';
import './styles/Missions.css';

const MissionsPage = () => {
  const missions = useSelector((state) => state.missions.allMissions);

  return (
    <div className="missions-holder">
      <table className="table table-striped mission-table">
        <thead className="missions-head">
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td> </td>
          </tr>
        </thead>
        <tbody className="missions-body">
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td>
                <button id="status-btn" type="button">
                  NOT A MEMBER
                </button>
              </td>
              <td>
                <button id="join-btn" type="button">
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsPage;
