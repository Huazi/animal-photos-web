import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './app/store';

const initialStat = {
}
describe(`App`, () => {
  beforeAll(()=>{});
  beforeEach(() => {

  });

  test(`Should display header`, () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(getByText('Animal Photos')).toBeInTheDocument();
  });

});

