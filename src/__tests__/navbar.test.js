import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../redux/configureStore';
import App from '../App';

describe('Navbar loads', () => {
  test('the component renders', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Profile/));
    expect(screen.getByText(/My Missions/)).toBeInTheDocument();
  });

  test('the component navigates', () => {
    const history = createMemoryHistory();
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>,
    );

    fireEvent.click(screen.getByText(/Missions/));
    expect(history.location.pathname).toEqual('/missions');
  });
});
