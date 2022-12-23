import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MissionsPage from '../components/Missions';
import store from '../redux/configureStore';

describe('Missions loads', () => {
  test('the component renders', () => {
    render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>,
    );
    expect(screen.getByText(/Mission/)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const renderComponents = renderer
      .create(
        <Provider store={store}>
          <MissionsPage />
        </Provider>,
      )
      .toJSON();
    expect(renderComponents).toMatchSnapshot();
  });
});
