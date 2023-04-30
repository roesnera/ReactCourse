import react from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from "./context/books.jsx";

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
)
