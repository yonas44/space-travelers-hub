import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import RocketList from '../components/RocketList';

describe('Testing rocket component', () => {
  test('renders correctly', () => {
    render(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    );
    expect(screen.getByTestId('rockets')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const renderComponents = renderer
      .create(
        <Provider store={store}>
          <RocketList />
        </Provider>,
      )
      .toJSON();
    expect(renderComponents).toMatchSnapshot();
  });
});
