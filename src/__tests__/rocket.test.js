import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket';

describe('Testing rocket component', () => {
  test('renders correctly', () => {
    const renderComponents = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      ).toJSON();
    expect(renderComponents).toMatchSnapshot();
  });
});
