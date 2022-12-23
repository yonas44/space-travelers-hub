import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import ProfilePage from '../components/Profile';

describe('Profile loads', () => {
  test('the component renders', () => {
    render(
      <Provider store={store}>
        <ProfilePage />
      </Provider>,
    );
    expect(screen.getByText(/My Missions/)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const renderComponents = renderer
      .create(
        <Provider store={store}>
          <ProfilePage />
        </Provider>,
      )
      .toJSON();
    expect(renderComponents).toMatchSnapshot();
  });
});
