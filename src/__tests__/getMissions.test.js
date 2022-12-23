import { getMissions, joinMission } from "../redux/missions/missions";

describe('reducer should return list of missions', () => {
  it('should return list of missions in the state', () => {
    const prevState = [];
    expect(joinMission(prevState, getMissions())).toBeDefined();
  });
});