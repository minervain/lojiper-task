import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { BrowserRouter } from "react-router-dom";
import RouterC from './router'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <BrowserRouter>
    <RouterC />
    <App />
  </BrowserRouter>
);

