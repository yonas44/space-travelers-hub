import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles/Missions.css';
import { joinMission } from '../redux/missions/missions';

const MissionsPage = () => {
  const { loading, allMissions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(joinMission(id));
  };

  return (
    <div className="missions-holder">
      {loading && <div className="animate" />}
      <div className="table-wrapper">
        <table className="table table-striped mission-table">
          <thead className="missions-head">
            <tr>
              <td className="text">Mission</td>
              <td className="text">Description</td>
              <td className="text">Status</td>
              <td className="text"> </td>
            </tr>
          </thead>
          <tbody className="missions-body">
            {allMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td style={{ fontWeight: 'bold' }} className="text">{mission.mission_name}</td>
                <td className="text">{mission.description}</td>
                <td>
                  <span id="status" className={mission.reserved ? 'reserved' : ''}>{mission.reserved ? 'Active Member' : 'NOT A MEMBER'}</span>
                </td>
                <td>
                  <button
                    onClick={() => handleClick(mission.mission_id)}
                    id="join-btn"
                    type="button"
                    className={mission.reserved ? 'reserved-btn' : ''}
                  >
                    {mission.reserved ? 'Leave Mission' : 'Join Mission'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MissionsPage;
