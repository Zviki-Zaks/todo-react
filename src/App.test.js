import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('App-jest', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('rendering app component', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    })
    const appEl = document.querySelector('.todo-app');
    expect(appEl).toBeInTheDocument();
  });
});

describe('App-RTL', () => {

  it('rendering app component', () => {
    render(<App />);
    expect(screen.getByText(/todo app/i)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent(/todo app/i);
  });
});
