import { fetchRockets, reserveRocket } from '../redux/rockets/rocket';

describe('reducer should return list of rockets', () => {
  it('should return list of rockets in the state', () => {
    const prevState = [];
    expect(reserveRocket(prevState, fetchRockets())).toBeDefined();
  });
});
