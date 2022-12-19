import React from 'react';
import './styles/Profile.css';

const ProfilePage = () => (
  <div className="profile-wrapper">
    <div className="mission-section">
      <h3>My Missions</h3>
      <table className="mission-table">
        <tbody>
          <tr>
            <td>first</td>
          </tr>
          <tr>
            <td>second</td>
          </tr>
          <tr>
            <td>third</td>
          </tr>
          <tr>
            <td>fourth</td>
          </tr>
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

export default ProfilePage;
